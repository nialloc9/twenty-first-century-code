/* eslint no-octal-escape: 0 */
import React from 'react'
import {Block} from '../Common/Styled';
import Article from '../Common/Article';
import newGame from '../../static/images/projects/javaFindTheDoorGame/newGame.png';
import mainMenu from '../../static/images/projects/javaFindTheDoorGame/mainMenu.png';
import collisionCantContinue from '../../static/images/projects/javaFindTheDoorGame/collisionCantContinue.png';
import winner from '../../static/images/projects/javaFindTheDoorGame/winner.png';
import { remCalc } from '../../common/helpers';

export default () => {

    const head = {
        title: 'Find The Door Game',
        meta: [
          {
            name: 'description',
            content: 'An collision detection game created using Java'
          },
          {
            name: 'keywords',
            content: 'java, collision detection, game'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: newGame,
            size: "large",
            alt: 'Java find the door game running image'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/java_simple_calculator'
        },
        {
            type: 'paragraph',
            text: `This is a 2d game made using the slick2d library. The object of the game is to find a secret door in the wall.
            The door is hidden so it is a trial and error approach. The game features scenes for the menu and the game.`
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Slick is a library based on the light weight java game library (lwjgl). It is used to make things like graphics easier. To start the project we must configure our java environment. First we create two new folders called
            res and lib. Inside lib two more folders called natives and jars were created. These are to store things like our jar files. After downloading the slick full distribution library and extracting it the files lwjgl.jar and
            slick.jar are copied from its lib folder to our own lib/jars folder that we created. After this we need to make them available so we add them to the list of compile-time libraries in the project configurations. To do this
            (in netbeans) right click the project and then go to configuration and library. After this we need to go to lwjgl.org to get and download lwjgl and go to its jar folder and get the lwjgl.jar file and add it to our project
            lib folder. Next the contents of the lwjgl folder must be copied into our lib/native folder. Lastly we need to add the windows file (I use windows) to the vm options.
            -Djava.library.path=C:\java\newBoston\java-slick\2javagame\lib\native\windows\
            </Block>
        },
        {
            type: 'paragraph',
            text: `The super simple super awesome java 2d slick game is a two state game. States are basically different screens and display different things when selected. Usually a game would have many states such as one for the main menu,
            one for level one, one for level two etc. Our game has just two. One for the main menu and one for the game level (we only have one level). Each state is a class in our project.`
        },
        {
            type: "image",
            size: "large",
            src: mainMenu,
            alt: 'Java game main menu image'
        },
        {
            type: 'paragraph',
            text: `To create a state using the slick 3d library there are three steps to take:`
        },
        {
            type: 'list',
            data: [
                "Give it a reference number(will be used when changing states)",
                "Add it as a state to the StateBasedGame object",
                "Initialize the state"
            ]
        },
        {
            type: 'code',
            language: 'java',
            code: `
package com.ocwebtech.sssa;

import java.awt.Menu;
import org.newdawn.slick.*;
import org.lwjgl.*;
import org.newdawn.slick.state.BasicGameState;
import org.newdawn.slick.state.StateBasedGame;

public class Main extends StateBasedGame{

  public static String gamename = "Super Simple Super Awesome";

  //reference numbers for state
  public static final int menu = 0;
  public static final int play = 1;

  //MAIN METHOD
  public static void main(String[] args) {
    AppGameContainer appgc;

    try{
        appgc = new AppGameContainer(new Main(gamename));
        //set window size
        appgc.setDisplayMode(640, 360, false);
        appgc.start();
    }catch(SlickException ex){
        ex.printStackTrace();
    }
  }

  @Override
  public void initStatesList(GameContainer gc) throws SlickException {
    //initialize the states
    this.getState(menu).init(gc, this);
    this.getState(play).init(gc, this);

    //enter menu state when game loads
    this.enterState(menu);
  }

  public Main(String gamename) {
    super(gamename);

    //add states
    this.addState(new com.ocwebtech.sssa.Menu(menu));
    this.addState(new com.ocwebtech.sssa.Play(play));
  }
}
            `
        },
        {
            type: 'paragraph',
            text: `As you can see from the code above inside our Main class we have two methods and a "constructor". The main class inherits from the StateBasedGame class that we imported from the state package.
            This allows us to change states easily. To begin with the states are given a reference number. 0 for menu and 1 for play. These are marked as final and are immutable.`
        },
        {
            type: 'paragraph',
            text: `Let’s look inside the "constructor" first. The "constructor" takes one parameter.  The name of the game to be created. For this game the name is “Super Simple Super Awesome”. It also creates two new states
            from the classes Menu and Play inside the sssa package. We will look at these classes soon. It gives these states their appropriate reference number.`
        },
        {
            type: 'paragraph',
            text: `The initStatesList is an overridden method from the StateBasedGame class initializes the states and enters the main state upon starting the game while the main method creates a new instance of our game and adds
            it to the window (the container). It also sets the size of the window and starts the game. This has to be wrapped in a try catch block because when creating the container it can throw a SlickException that needs
            to be handled.`
        },
        {
            type: 'code',
            language: 'java',
            code: `
            package com.ocwebtech.sssa;

//functionality to track location of the mouse
import org.lwjgl.input.Mouse;

//slick
import org.newdawn.slick.state.*;
import org.newdawn.slick.*;

public class Menu extends BasicGameState{ //make class a state

    //data members
    Image playNow;
    Image exitGame;
    String instructions;
    Music music;

    //CONSTRUCTOR
    public Menu(int state){

    }

    //GET ID METHOD.. returns the id of the state
    @Override
    public int getID() {
        return 0; //The menu state id is 0. Play is 1.
    }

    //UPDATE METHOD.. updates the images shown on the screen
    @Override
    public void update(GameContainer gc, StateBasedGame sbg, int i) throws SlickException {
        Input input = gc.getInput(); //input from the user

        //position of the mouse
        int xpos = Mouse.getX();
        int ypos = Mouse.getY();

        //Play button
        if((xpos > 100 && xpos < 261) && (ypos > 185 && ypos < 260)){
            if(input.isMouseButtonDown(0)){ //if left mouse button is clicked.
                sbg.enterState(1); //enter state with id of 1(play state).
            }
        }

        //Exit button
        if(( xpos > 116 && xpos < 215) && (ypos > 107 && ypos < 155)){
            if(input.isMouseButtonDown(0)){
                System.exit(0); //exit with no errors
            }
        }
    }

    //RENDER METHOD.. draws stuff on the screen
    @Override
    public void render(GameContainer gc, StateBasedGame sbg, Graphics grphcs) throws SlickException {
        playNow.draw(100, 100);
        exitGame.draw(100, 200);
        grphcs.drawString(instructions, 100, 50);
    }

    //INIT METHOD.. initializer
    @Override
    public void init(GameContainer gc, StateBasedGame sbg) throws SlickException {
        playNow = new Image("res/startButton.png");
        exitGame = new Image("res/quitButton.png");
        instructions = "Instructions: Find the hidden door in the wall.";

        //Add Music
        music = new Music("res/mainSound.wav");
        music.loop();
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `The states that we create are the menu and the play states. To create a state for the game we override some methods from the BasicGameState class it inherited from. First the getId method which returns the state
            reference number, the update method which looks at where the position of the mouse and updates the current state accordingly, the render method for rendering to the screen, and the init method that initializes
            the state to create the Images to be drawn to the screen and the music object for the sound. The init method will be called before the render method to prepare the objects to be rendered.`
        },
        {
            type: "image",
            size: 'large',
            src: collisionCantContinue,
            alt: 'Java game collision detection image'
        },
        {
            type: 'code',
            language: 'java',
            code: `
package com.ocwebtech.sssa;


//functionality to track location of the mouse
import org.lwjgl.input.Mouse;

//slick
import org.newdawn.slick.state.*;
import org.newdawn.slick.*;

public class Play extends BasicGameState{

    Animation guy, movingUp, movingDown, movingLeft, movingRight;
    Image map;

    //music
    Music music;

    boolean quit = false;
    boolean winner = false;

    int[] duration = {200, 200};

    //guy start position
    float guyPositionX = 0;
    float guyPositionY = 0;

    //move(shift) the map so that when guy moves.
    float shiftX = guyPositionX + 320;
    float shiftY = guyPositionY + 160;

    //CONSTRUCTOR
    public Play(int state){

    }

    //GET ID METHOD.. gets the id of the state
    @Override
        public int getID() {
        return 1;
    }

    //UPDATE METHOD.. updates the images on the state
    @Override
    public void update(GameContainer gc, StateBasedGame sbg, int i) throws SlickException {
        Input input = gc.getInput(); //get user input

        //if user pushes up
        if(input.isKeyDown(Input.KEY_UP)){
            guy = movingUp;
            guyPositionY += i * .1f; //moves the map. i is the number of milliseconds between calls to the update method.

            //collision detection
            if(guyPositionY>79){
                guyPositionY -= i * .1f; //stop guy.
            }
            if((guyPositionX < -919) && (guyPositionY < -22) && guyPositionY > -78){
                winner = true;
            }

            else{
                winner = false;
                quit = false;
            }
        }

        //if user pushes down
        if(input.isKeyDown(Input.KEY_DOWN)){
            guy = movingDown;
            guyPositionY -= i * .1f;

            //collision detection
            if(guyPositionY<-447){
                guyPositionY += i * .1f; //stop guy.
            }
            if((guyPositionX < -919) && (guyPositionY < -22) && guyPositionY > -78){
                winner = true;
            }

            else{
                winner = false;
                quit = false;
            }
        }

        //if user pushes left
        if(input.isKeyDown(Input.KEY_LEFT)){
            guy = movingLeft;
            guyPositionX += i * .1f;

            //collision detection
            if(guyPositionX>243){
                guyPositionX -= i * .1f; //stop guy
            }

            if((guyPositionX < -919) && (guyPositionY < -22) && guyPositionY > -78){
                winner = true;
            }

            else{
                winner = false;
                quit = false;
            }
        }

        //if user pushes right
        if(input.isKeyDown(Input.KEY_RIGHT)){
            guy = movingRight;
            guyPositionX -= i * .1f;

            //collision detection
            if(guyPositionX<-920){
                guyPositionX += i * .1f; //stop guy
            }
            if((guyPositionX < -919) && (guyPositionY < -22) && guyPositionY > -78){
                winner = true;
            }

            else{
                winner = false;
                quit = false;
            }
        }

        //if user presses escape
        if(input.isKeyDown(Input.KEY_ESCAPE)){
            quit = true;
        }

        //if the options are on the screen
        if(quit == true){

            //if user presses R
            if(input.isKeyDown(Input.KEY_R)){
                quit = false;
            }

            //if user presses M
            if(input.isKeyDown(Input.KEY_M)){
                sbg.enterState(0); //go to main menu
            }

            //if user presses Q
            if(input.isKeyDown(Input.KEY_Q)){
                System.exit(0); //exit with no errors
            }
        }
    }

    //RENDER METHOD.. renders stuff to the screen
    @Override
    public void render(GameContainer gc, StateBasedGame sbg, Graphics grphcs) throws SlickException {
        map.draw(guyPositionX, guyPositionY);
        guy.draw(shiftX, shiftY);
        grphcs.drawString("Guy's X: "+guyPositionX + " Guy's Y: " + guyPositionY, 10, 50);

        //if quit is true draw options to screen
        if(quit == true){
            grphcs.drawString("Resume (R)", 250, 100);
            grphcs.drawString("Main Menu (M)", 250, 150);
            grphcs.drawString("Quit Game (Q)", 250, 200);

            //id quit is false clear the options from the screen
            if(quit == false){
                grphcs.clear();
            }
        }

        //if user finds the hidden door
        if(winner == true){
            grphcs.drawString("Found it! I win!", shiftX +50, shiftY - 20);
            quit = true;

            if(winner == false){
                quit = false;
            }
        }

    }

    //INIT METHOD.. initializer
    @Override
    public void init(GameContainer gc, StateBasedGame sbg) throws SlickException {
        map = new Image("res/background.png");

        //image arrays for animation. start image and end image.
        Image[] walkUp = {new Image("res/guyBack.png"), new Image("res/guyBack.png")};
        Image[] walkDown = {new Image("res/guyFront.png"), new Image("res/guyFront.png")};
        Image[] walkLeft = {new Image("res/guyLeft.png"), new Image("res/guyRight.png")};
        Image[] walkRight = {new Image("res/guyRight.png"), new Image("res/guyRight.png")};

        //create animations
        movingUp = new Animation(walkUp, duration, false);
        movingDown = new Animation(walkDown, duration, false);
        movingLeft = new Animation(walkLeft, duration, false);
        movingRight = new Animation(walkRight, duration, false);

        //assign guy to default animation when game starts
        guy = movingDown;
    }

}
            `
        },
        {
            type: 'paragraph',
            text: `The play state is similar to the main state in that it overrides the same classes because it inherits from basicGameState too. If you look at the data members there is a quit variable. As long as this is false the
            game will play as normal but when this is true a menu will appear that will give the user options to resume, go to main menu, or quit. These are determined by the input from the GamesContainer. The update method
            includes the logic to decide whether to move the map and where to move it when the user presses a button. It also is used to decide what image of the guy to show based on what button was pressed and when to display
            the menu. Collision detection logic is also handled in the update method. To do this animations need to be created which need to be passed an image array(start and end image) and how long we want the animation to
            run. It is important to know when the character is moving it is actually the map that is shifting not him moving. When collision detection detects the user is at the door it draws a new string with “Found it I win”
            above the characters head and sets exit to true so the menu appears.`
        },
        {
            type: "image",
            src: winner,
            size: 'large',
            alt: 'Java find the door game winner image'
        },
        {
            type: 'published',
            date: `08/03/2016`
        },
    ];

    return <Article head={head} data={data} />;
};