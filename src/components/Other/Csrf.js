import React from 'react'
import Article from '../Common/Article';
import start from '../../static/images/projects/csrf/start.png';

export default () => {

    const head = {
        title: "CSRF",
        meta: [
          {
            name: 'description',
            content: 'learn how to prevent CSRF attacks in PHP'
          },
          {
            name: 'keywords',
            content: 'CSRF php, attack, php'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: start,
            alt: 'Csrf start image'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/csrfProtection'
        },
        {
            type: 'paragraph',
            text: `A CAPTCHA (Completely Automated Public Turing to tell Computers and Humans Apart) is type of challenge
            response test used to test whether the user is human or not. It is a very useful piece of technology and
            is widely used today. It works by putting a number, phrase, or combination in an image that has been
            created to be only readable by humans and not by bots. Recently, other forms are becoming more popular
            such as selecting only pictures with a ghost in it as Snapchat implemented.`
        },
        {
            type: 'paragraph',
            text: `CSRF (cross site forgery request) is an attack where the user is forced to perform an action that they did
            not want to perform on a web application they are currently authenticated in. We need to protect against
            these kinds of attacks. A common example of how one of these attacks could occur is an email that when
            opened calls a url that does something we never intended to do. Or an image that when viewed does something
            we never wanted to do. One method of avoiding such attacks is by using a token that is created on in a
            session variable and is available to the authenticated user at each action in a hidden field. Each time
            a user does an action this token change to another random value. Every action that occurs the value in
            the hidden field is checked against the session variable value. Because an attacker has no access to the
            server they would have to know the value of this token so as to pass the token check. And because this
            is refreshed after every action it becomes increasingly difficult for an attacker to be successful and
            ensure that only the authenticated user is performing actions and a third party cannot force them into
            unwanted actions. This is the system we will be looking at. We have two scripts, a csrfToken.auth script
            that handles the checks and generation of the tokens. And a secondscript to handle the http requests from
            the client. Let’s work backwards and look at the csrfToken.auth script first.`
        },
        {
            type: 'code',
            language: 'php',
            code: `
<?php
if(!isset($_SESSION)){
  session_start();
}

class Token{

  //GENERATE TOKEN
  public static function generate(){
      //create csrf token
      return $_SESSION['csrfToken'] = base64_encode(openssl_random_pseudo_bytes(32)); //RANDOM 32 BYTE VALUE
  }

  //CHECK TOKEN
  public static function check($token){
      //token check
      if($token == $_SESSION['csrfToken']){
          return 1;
      }else{
          return 0;
      }
  }
}
?>
            `
        },
        {
            type: 'paragraph',
            text: `As you can see the session needs to be started to ensure the session variables are available to us. We have
            one class called token with two methods. The first method is to generate a random token. To do this we do
            a combination of two php functions. First we create a 32 random bit string and then pass this into the
            base64_encode function to further create a random 64 bit value. This is our token and is returned. Next
            we have the check method that checks whether the token passed as a parameter is the same as the token
            stored. If it is it returns a 1 and if not a 0. Now let’s look at our second script to handle the http
            requests.`
        },
        {
            type: 'code',
            language: 'php',
            code: `
<?php
require_once '../modals/csrfToken.modal.php';

//GENERATE TOKEN
if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenGenerate')  {

  //assign variables
  $task = $_POST['task'];

  $csrfToken = Token::generate();

  //return value
  echo $csrfToken;
}

//task check
if(isset($_POST['task']) && $_POST['task'] == 'csrfTokenCheck')  {

  //data check
  if(isset($_POST['token']) && !empty($_POST['token'])){

      //assign variables
      $task = $_POST['task'];
      $token = $_POST['token'];


      $result = Token::check($token);

      //return value
      echo $result;
  }else{
      echo 0;
  }
}
?>
            `
        },
        {
            type: 'paragraph',
            text: `First we must require our csrfToken.auth file so we have the Token class available to us. Each request to
            this file sends with it a task variable that is used to decide upon the action to be taken. If it is
            generate the generate method from Token is called creating the token and storing it as a session variable
            before passing it back so it can be added to the hidden inputs on the client side. Next we have the
            csrfTokenCheck task that calls our Token::check method.  If this is successful it will return 1 and
            if not a 0. As you can see from this now our client side knows from the help of the server side if
            the user is indeed intending to perform an action (They have a correct token) or it is an attacker
            (No token or incorrect token). It is very important that the token resets after each action to ensure the
            same token is not use twice to ensure an attacker cannot get hold of it.`
        },
        {
            type: 'published',
            date: `26/08/2016`
        },
    ];

    return <Article head={head} data={data} />;
};