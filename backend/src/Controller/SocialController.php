<?php

declare(strict_types=1);

/*
 * This file is part of the Stooa codebase.
 *
 * (c) 2020 - present Runroom SL
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Controller;

use App\Service\FishbowlService;
use HWI\Bundle\OAuthBundle\Security\Core\Authentication\Provider\OAuthProvider;
use HWI\Bundle\OAuthBundle\Security\Core\Authentication\Token\OAuthToken;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserChecker;

final class SocialController extends AbstractController
{
    public function ping(string $accessToken): Response
    {
        $token = new OAuthToken($accessToken);
        $token->setResourceOwnerName('facebook');

        $oauthUserProvider = $this->get('app.oauth.provider.user_provider');
        $resourceOwnerMap = $this->get('hwi_oauth.resource_ownermap.main');
        $userChecker = new UserChecker();


        $oauthProvider = new OAuthProvider($oauthUserProvider, $resourceOwnerMap, $userChecker, $token);
        $token = $oauthProvider->authenticate($token);
        $this->get('security.token_storage')->setToken($token);

        $client = $this->get('doctrine.orm.entity_manager')->getRepository('AppBundle:Client')->findOneBy([], ['id' => 'DESC']);

        $oauth2server = $this->get('fos_oauth_server.server');
        $accessToken = $oauth2server->createAccessToken($client, $this->getUser(), 'user', 3600);

        return new JsonResponse(['response' => $accessToken]);
    }
}
