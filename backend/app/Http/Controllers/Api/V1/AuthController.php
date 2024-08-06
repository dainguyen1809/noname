<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login(AuthRequest $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Tài khoản hoặc mật khẩu không đúng'], Response::HTTP_UNAUTHORIZED);
        }

        $cookie = cookie()->make(
            'cookie_login',
            $token,
            auth()->factory()->getTTL() * 1
        );

        return $this->respondWithToken($token)->withCookie($cookie);
    }



    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 1 // 1 phut
        ]);
    }
}
