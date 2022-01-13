<?php

namespace App\Security;

use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\OAuthAwareUserProviderInterface;


class SocialProvider implements OAuthAwareUserProviderInterface
{
    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        dump($response);
    }
}
