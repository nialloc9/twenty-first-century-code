import React, { PureComponent } from 'react'
import {Block, CodeBlock, Link} from '../Common/Styled';
import Image from "../Common/ImagePopup";
import checkBtnInputCorrectNumber from '../../static/images/projects/captcha/checkBtnInputCorrectNumber.png';
import checkBtnInputWrongNumber from '../../static/images/projects/captcha/checkBtnInputWrongNumber.png';
import { remCalc } from '../../common/helpers';

class Captcha extends PureComponent{

    shouldComponentUpdate() {
        return false
    }
    
    render(){
        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={checkBtnInputWrongNumber}
                        margin="auto"
                        size="large"
                        alt="Captcha image generator application running wrong input image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    <Block>
                        Source code: ES6: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/es6CaptchaGenAndChecker">GitHub</Link>
                    </Block>
                    <Block>
                        Source code: ES5 with jQuery: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/captchaImageGeneratorandChecker">GitHub</Link>
                    </Block>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    A CAPTCHA (Completely Automated Public Turing to tell Computers and Humans Apart) is type of challenge
                    response test used to test whether the user is human or not. It is a very useful piece of technology and
                    is widely used today. It works by putting a number, phrase, or combination in an image that has been
                    created to be only readable by humans and not by bots. Recently, other forms are becoming more popular
                    such as selecting only pictures with a ghost in it as Snapchat implemented.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Captchas are used in a wide variety of applications such as preventing comment spam on blogs, protecting
                    registration, and online polls. Bots find It difficult to read distorted text or scan images so by implementing
                    a captcha test where ever you wish to protect from this you can secure your application.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    To see the code including the client side code please follow the links above but in this article we are going
                    to discuss the server side php code and it's operation.
                </Block>

                <CodeBlock language="php" margin={`${remCalc(20)} 0`}>
{`
<?php
session_start();

$name = 'captcha';

//set content as image
header('Content-type: image/jpeg');

//get session variable
$text = $_SESSION[$name];

//set image properties
$font_size = 30;

$image_width = 110;
$image_height= 40;

//create image
$image = imagecreate($image_width, $image_height);
imagecolorallocate($image, 255, 255, 255);

//set text color
$text_color = imagecolorallocate($image, 0, 0, 0);

//set image lines
for($x=1; $x<=30; $x++){
  $x1 = rand(1, 100);
  $y1 = rand(1, 100);
  $x2 = rand(1, 100);
  $y2 = rand(1, 100);

  imageline($image, $x1, $y1, $x2, $y2, $text_color);
}


//set image text
imagettftext($image, $font_size, 0 , 15, 30, $text_color, 'captchaFont.ttf', $text);

//create jpeg
imagejpeg($image);

//free up memory
imagedestroy($image);


?>
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    The first and most important action that occurs here is session_start(). This creates or resumes a session and
                    if does not occur any session data required by our code will not be available. This is really important as it
                    can be difficult to locate with a large application where the session was not started. When this is called PHP
                    will open and read any existing session data and will automatically populate the super global $_SESSION.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    The name variable is not actually needed here and we could of just added it inside $_SESSION[] but this application
                    was built with the intention of being able to be reused by other developers so for readability and in the event
                    the developer wanted to change the name of the session it would be easier to locate. Next we need to change the
                    type of content to a jpeg image. One thing to note here is that the header must be called before any output is
                    sent. This is a common problem that often occurs when developers use requires or includes getting external code.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    When an Ajax request gets sent we create a new session variable with the name captcha (we will look at this in
                    more detail soon). We take this value and assign it to the text variable. This is the number that will be
                    distorted before being outputted as an image to be used in the captcha test. Next we create image property
                    variables and assign them values. Again here we could of just added these in directly into the imagecreate()
                    {`function`} but to aid readability variables with descriptive names are given. The imagecreate()
                    {`function`} returns an image identifier representing blank image of the size we specified in our variables.
                    (As of November, 15th, 2016 the php documentation recommends using the imagecreatetruecolor() {`function`} so the
                    image processing occurs on the highest quality image possible. However, imagecreate() still works fine.)  Next
                    we need to pass our image into the imagecolorallocate() {`function`}. This allocates a color to the image an takes
                    4 arguments the image to allocate color to along with a rbg value. The first call to imagecolorallocate()
                    fills the background colour when using imagecreate().
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Next we create the color for the text. We create a loop that calls the imageline() {`function`} which draws a line
                    between two given points that we have set to be random. Now we need to add our text to the image so we use the
                    imagegettext {`function`} which takes arguments of the image, font size, angle, coordinates of x and y to determine
                    roughly the basepoint of the left character in the text, colour, font file, and the text to display. Next we
                    call the imagejpeg() {`function`} which creates a jpeg file from the given image. This has two other optional
                    argument that we didn’t give but are worth noting: the to argument which specifies a path to save the file
                    to and the quality argument to determine the quality of the image (0-100). And lastly it is good practice to
                    destroy the image to free up memory.
                </Block>

                <CodeBlock language="php" margin={`${remCalc(20)} 0`}>
{`
<?php
session_start();

//GENERATE FUNCTION
function generateCaptchaSession($name){

  //assign variables
  $result = 0;
  //delete previous session
  if(isset($_SESSION[$name]) || empty($_SESSION[$name])){
      unset($_SESSION[$name]);
  }

  //session check
      if(!isset($_SESSION[$name])){

          //create session
          $_SESSION[$name] = rand(1000,9999);

          //re-assign $result variable
          $result = 1;
      }

  echo $result;
}


//TASK CHECK.. createCapthcaSession
if(isset($_GET['task']) && $_GET['task'] == 'createCapthcaSession'){

  //check name
  if(isset($_GET['name']) && !empty($_GET['name'])){

      //assing more variables
      $name = $_GET['name'];

      //generate
      generateCaptchaSession($name);
  }

}

//CHECK FUNCTION
function checkCaptchaSession($userCaptchaInput, $name){
  if($userCaptchaInput == $_SESSION[$name]){
      echo 1;
  }else{
      echo 0;
  }
}

//TASK CHECK.. checkCaptchaSession
if(isset($_GET['task']) && $_GET['task'] == 'checkCaptchaSession'){

  //data check
  if(isset($_GET['userInput']) && !empty($_GET['userInput'])){

      if(isset($_GET['name']) && !empty($_GET['name'])){

          //assign variables
          $userInput = $_GET['userInput'];
          $name = $_GET['name'];

          //pass data to function
          checkCaptchaSession($userInput, $name);

      }

  }
}
?>
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Again we can see first the session_start() {`function`} is called. When we receive a get request it is checked for a
                    value called task. This is how we determine what action to occur. The first action or {`function`} is the generate
                    {`function`} which is called when the task is createCaptchaSession. First we check if there is a session variable
                    with the name that was passed from the client side (‘captcha’). If there is we unset it to remove any previous
                    value that it had. This is important to ensure that old data is not kept. The unset() {`function`} destroys the
                    specified values. It is important to not mix this up with session_unset() because session_unset() will free
                    all session variables that are registered. After we have done our checks and unset the session variable we
                    now create a new session variable with the value of a random four digit number. This is now our session value
                    that was used when creating the image. Lastly a result value is echoed out so that the client side can
                    determine whether the session data was created successfully.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Finally, let’s look at how the session data is checked to whether the user inputted data matches the session data
                    i.e. the number in the image. This is a simple process where the userInput passed from the client side is checked
                    with a simple selection statement and returns a 0 for no and 1 for yes which is then used by the client side to
                    determine whether to allow the user to continue.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    <Image
                        src={checkBtnInputCorrectNumber}
                        margin="auto"
                        size="large"
                        alt="Captcha image generator application correct input"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 07/07/2016
                </Block>
            </Block>
        )
    }
}

export default Captcha;