import React, { PureComponent } from 'react'
import {Block, CodeBlock, Link} from '../Common/Styled';
import Image from "../Common/ImagePopup";
import emailReceived from '../../static/images/projects/verifyEmail/emailReceived.png';
import { remCalc } from '../../common/helpers';

class VerifyEmail extends PureComponent{

    render(){
        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={emailReceived}
                        margin="auto"
                        size="large"
                        alt="Email received image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/emailAuthenticate">GitHub</Link>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Inside the database schema there are two tables. One holds the user data while the other is used for storing the data
                    passed with the email request. The user table has a column for activated and email in it while the email_auth table
                    has five columns: id, token, email, created_at, and updated_at. I will provide a sql schema in the source source
                    but to keep things simple the user registration script will not be included as this would be done on sign up and
                    will vary depending on what the developers data requirements from the user are. To begin with let’s work backwards
                    and look at the auth.controller script which is responsible for checking the status of a user’s email authentication.
                </Block>

                <CodeBlock language="php" margin={`${remCalc(20)} 0`}>
{`
<?php

class Auth{

    //AUTHENTICATE EMAIL REQUEST
    public function verifyEmailRequest($email, $token, $timestamp, $db){
        $stmt = $db->prepare("INSERT INTO email_auth(id, token, email, created_at, updated_at) VALUES ('',:token,:email,:created_at,:updated_at)");

        $stmt->bindParam(':token', $token);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':created_at', $timestamp);
        $stmt->bindParam(':updated_at', $timestamp);

        if($stmt->execute()){
            return true;
        }

        return false;
    }

    //CONFIRM EMAIL SENT MATCHS STORED INFO
    public function verifyEmailRequestConfirmation($email, $token, $db){
        $stmt = $db->prepare("SELECT * FROM email_auth WHERE token=:token AND email=:email");

        $stmt->bindParam(':token', $token);
        $stmt->bindParam(':email', $email);

        if($query = $stmt->execute()){
            $count = $stmt->rowCount();
            if($count>0){
                return true;
            }
        }

        return false;
    }

    //UPDATE EMAIL VALIDATION
    public function verifyEmail($email, $db){
        $stmt = $db->prepare("UPDATE users SET activated = 1 WHERE email = :email");
        $stmt->bindParam(':email', $email);
        if($query = $stmt->execute()){
            return true;
        }

        return false;
    }

    //VERIFY USERS ACCOUNT IS ACTIVATED
    public function verifyEmailIsActivated($email, $db){
        $stmt = $db->prepare("SELECT id FROM users WHERE email = ? AND activated = 1");
        $stmt->bindParam(1, $email);

        $stmt->execute();
        if($stmt->rowCount() > 0){
            return true;
        }

        return false;
    }

    //DELETE EMAIL AUTHENTICATE
    function deleteEmailAuthenticate($email, $db){
        $stmt = $db->prepare("DELETE FROM email_auth WHERE email = :email");
        $stmt->bindParam(':email', $email);
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}

?>
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    From this we can see that the class Auth has five methods, all responsible for updating or checking different
                    pieces of the database. It is important to note that this script is only concerned with the database and the
                    actual sending of the email is handled elsewhere. Also as mentioned the database $db is connected to in the file
                    connect. The verifyEmailRequest is called when the user creates a new account and we wish to store information on
                    the email that will be sent to the user. We need to store three values in the database for future reference.
                    The email, timestamp, and the token which is a randomly generated token sent specifically with the email sent
                    to the user to ensure the email address provided the user has access to.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    The verifyEmailRequestConfirmation method confirms that the information provided by the user when
                    they click on the link sent to them in the email matches the data that was stored when a email
                    confirmation request was sent to the user. If it is we now can update the users account to show
                    the email account has been activated. We do this with the verifyEmail method.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Lastly we have two other functions that are important. The verify emailIsActivated which checks to see if the
                    users account is already activated and the deleteEmailAuthenticate which is used to remove the data from the
                    database when the email is activated so as to free up memory and to ensure the email can only be used once.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Now let’s look at the script that handles the http requests sent from the client in relation to email authentication:
                </Block>

                <CodeBlock language="php" margin={`${remCalc(20)} 0`}>
{`
  <?php
  require_once '../utilites/connect.utilites.php';
  require_once '../controller/auth.controller.php';


  //sendEmailAuth task check
  if(isset($_POST['task']) && $_POST['task'] == 'sendEmailAuth'){

      $email = $_POST['email'];
      $timestamp = $_POST['timestamp'];

      sendEmail($email, $timestamp, $db);
  }

  //checkEmailAuthenticate task check
  if(isset($_GET['task']) && $_GET['task'] == 'checkEmailAuthenticate'){
      $email = $_GET['email'];
      $emailToken = $_GET['token'];

      $token = urldecode($emailToken);

      checkEmailAndToken($email, $token, $db);
  }

  //checkUserIsAuthenticated task check
  if(isset($_GET['task']) && $_GET['task'] == 'checkUserIsAuthenticated'){

      $email = $_GET['email'];

      if(Auth::verifyEmailIsActivated($email, $db)){
          echo 1;
      }else{
          echo 2;
      }
  }

  //sendEmail function
  function sendEmail($email, $timestamp, $db){
      //variable check
      if(isset($email) && !empty($email)){

          //create emailToken
          $emailToken = base64_encode(openssl_random_pseudo_bytes(32));

          //addVerifyEmailRequestToDb
          if(Auth::verifyEmailRequest($email, $emailToken, $timestamp, $db)){

              //headers
              $headers = "MIME-Version: 1.0";
              $headers .= "Content-type:text/html;charset=UTF-8";

              // More headers
              $headers .= 'From: noreply@example.com';
              $headers .= "X-MSMail-Priority: High";

              $subject = "SSSA email verification request.";

              $to = "Dear user";
              $body = "<br><br>sssa.com email verification request. Please folow the link below to verify your account: <br><br>";
              $link = "http://localhost/projects/emailAuthenticate/emailValidate.html?t=".urlencode($emailToken)."&e=".$email;

              $from = "<br><br>The SSSA team";
              $tag = "<br><br>Super Simple Super Awesome".$from;

              //construct message
              $message = $to.$body.$link.$tag;


              //send
              if(mail($email,$subject,$message,$headers)){ echo 1;} //success
          }else{ echo 2;} //Auth::verifyEmailRequest failure
      }else{ echo 3;} //email not set
  }

  //checkEmail function
  function checkEmailAndToken($email, $token, $db){
      //variable check
      if(isset($email, $token) && !empty($email) && !empty($token)){

          //verify data matches db data
          if(Auth::verifyEmailRequestConfirmation($email, $token, $db)){

              //update db to add 1 to user table colum activate
              if(Auth::verifyEmail($email, $db)){

                  //delete data from email_auth table
                  if(Auth::deleteEmailAuthenticate($email, $db)){
                      //deleted from db
                      echo 1;
                  }else{
                      //unable to delete from db
                      echo 5;
                  }

              } //success
              else{ echo 2; } //Auth::verifyEmail($email, $db) fail
          }else{ echo 3; } //Auth::verifyEmailRequestConfirmation($email, $token, $db) fail
      }else{ echo 4; } //email or token not set

  }
  ?>
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    First, we require our connect script and the auth.controller script which we discussed already. When a http
                    request is sent to this page a task variable is sent with it. This is used to determine which action to do.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    If the task is sendEmail we call the sendEmail action({`function`}). This will send a email to the user’s supplied
                    email with a token attached as a url parameter. Let’s look at this token. It is created by first creating a
                    random 32 string of bytes using the openssl_random_pseudo_bytes. Now to create a 64 bit string from our random
                    32 bit string we base64_encode(). The combination of these is used to make the token harder to garner by anyone
                    wishing to steal this information. Finally, the mail {`function`} is used to send an email. This email has a link
                    in it that we shall look at more closely now. It is a link to different page that also contains the user email
                    and token. Once arriving on this page the client side takes these values and passes them in a http request
                    back to our script that takes them and calls the check emailAndToken method which goes through our methods
                    from auth.controller that it checks that there is data in the email_auth table that matches the email and
                    token provided. If there is it updates the user data where its email is the same as the email provided and
                    sets activated to 1 which now unlocks the account. Lastly for housekeeping it removes this data from the
                    database.  Using the same methodology a password can be reset by sending a different link to page to allow
                    the user to reset the password if the token and email are correct.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 11/09/2016
                </Block>
            </Block>
        )
    }
}

export default VerifyEmail;