import React, { PureComponent } from 'react'
import {Block, CodeBlock, Image, Link} from '../Common/Styled';
import running from '../../static/images/projects/javaCalculator/running.png';
import { remCalc } from '../../common/helpers';

class Calculator extends PureComponent{

    render(){
        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={running}
                        margin="auto"
                        size="large"
                        alt="Calculator application running image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/java_simple_calculator">GitHub</Link>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    This is a Java calculator that can do add, subtract, multiply, divide, and get the sin, cos, and tan. Ut has a gui made using the swing package
                    that allows it to be easily used. This was an interesting project that I got the idea for online. I was searching for suggested projects to do in java and one that was regularly recommended was a calculator.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    This project has three classes that are responsible for different concerns. The gui class is the graphic user interface and allows the user to input data. The Cal class is responsible for the logic of the application.
                    And lastly the Main app is responsible for running the app so let’s look at this class first.
                </Block>

                <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
{`
package super_simple_calculator;


public class Main {
    public static void main(String[] args) {
        gui guiCal = new gui();
        guiCal.run();
    }
}
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    So if we look at the main class upon running this class a new instance of the graphic user interface is created and a the run method called. Let’s look at this below.
                </Block>

                <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
{`
package super_simple_calculator;

//import awt packages
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

//import swing pacakges
import javax.swing.JTextArea;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JButton;

//GUI CLASS.. this is the user interface that the user will see. Implements ActionListener to listen for events.
public class gui implements ActionListener{

  //instance variables
  private final JFrame CalFrame;
  private final JPanel CalPanel;
  private final JTextArea CalText;

  //button instance variables.. we give each element a name so we can find it easier
  private final JButton CalBtn[],btnAdd, btnMinus, btnMultiply, btnDivide, btnEquals, btnClear,
      btnSR, btnS, BtnODB, btnCos, btnSin, btnTan;

  //instance variable for our cal object.
  private final Cal cal;

  //array to hold the values of our buttons
  private final String[] btnValue = {
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  };

  //GUI CONSTRUCTOR.. intialize instance variables and get gui ready
  public gui(){
      CalFrame = new JFrame("Simple Calculator");
      CalFrame.setResizable(false); //Calculator size cannot be changed.

      CalPanel = new JPanel(new FlowLayout()); //using FlowLayout layout manager to set where components are placed

      CalText = new JTextArea(2, 25); //2 rows 25 colums

      CalBtn = new JButton[10];

      //Loop through and create buttons giving each button a name
      for(int x = 0; x < 10; x++){
          CalBtn[x] = new JButton(String.valueOf(x));
      }

      //Instantiate operator buttons
      btnAdd = new JButton("+");
      btnMinus = new JButton("-");
      btnMultiply = new JButton("x");
      btnDivide = new JButton("/");
      btnEquals = new JButton("=");
      btnSR = new JButton("√"); //square root button
      btnS = new JButton("x2");
      BtnODB = new JButton("1/x");
      btnSin = new JButton("sin");
      btnCos = new JButton("cos");
      btnTan = new JButton("tan");
      btnClear = new JButton("C");

      //Create new cal object
      cal = new Cal();
  }

  //RUN METHOD.. set up GUI.. add buttons panels etc
  public void run(){
      CalFrame.setVisible(true);
      CalFrame.setSize(350, 280);
      CalFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      CalFrame.add(CalPanel); //Add panel to frame

      //Add text to panel
      CalPanel.add(CalText);

      //Add number buttons to panel and attach an ActionListener;
      for(int x = 0; x < 10; x++){
          CalPanel.add(CalBtn[x]);
          CalBtn[x].addActionListener(this);
      }


      //Add all operator buttons to panel
      CalPanel.add(btnAdd);
      CalPanel.add(btnMinus);
      CalPanel.add(btnMultiply);
      CalPanel.add(btnDivide);
      CalPanel.add(btnS);
      CalPanel.add(btnSR);
      CalPanel.add(BtnODB);
      CalPanel.add(btnSin);
      CalPanel.add(btnCos);
      CalPanel.add(btnTan);
      CalPanel.add(btnEquals);
      CalPanel.add(btnClear);

      //Add action listeners.. we will use the event that happens on the JFrame
      btnAdd.addActionListener(this);
      btnMinus.addActionListener(this);
      btnMultiply.addActionListener(this);
      btnDivide.addActionListener(this);
      btnS.addActionListener(this);
      btnSR.addActionListener(this);
      BtnODB.addActionListener(this);
      btnSin.addActionListener(this);
      btnCos.addActionListener(this);
      btnTan.addActionListener(this);
      btnEquals.addActionListener(this);
      btnClear.addActionListener(this);


  }


  /*
   Override actionPerformed and use the event
   to get it's source and do differant actions
   based on where the event happened.
   */
    @Override
      public void actionPerformed(ActionEvent event){
      final Object eventSource = event.getSource(); //gets the location of the event

      for(int x = 0; x < 10; x++){
      if(eventSource == CalBtn[x]){
      CalText.replaceSelection(btnValue[x]); //replaces current content with the value from the btnValue array
          return; //Leave the loop
    }
    }

    //check if event happend at add button
    if(eventSource == btnAdd){
      calWriter(cal.calculateBasic(Cal.BasicMathOperators.ADD, calReader()));
    }

    //check if event happend at mins button
    if(eventSource == btnMinus){
      calWriter(cal.calculateBasic(Cal.BasicMathOperators.MINUS, calReader()));
    }

    //check if event happend at multiply button
    if(eventSource == btnMultiply){
      calWriter(cal.calculateBasic(Cal.BasicMathOperators.MULTIPLY, calReader()));
    }

    //check if event happend at divide button
    if(eventSource == btnDivide){
      calWriter(cal.calculateBasic(Cal.BasicMathOperators.DIVIDE, calReader()));
    }

    //check if event happend at square button
    if(eventSource == btnS){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.SQUARE, calReader()));
    }

    //check if event happend at square root button
    if(eventSource == btnSR){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.SQUAREROOT, calReader()));
    }

    //check if event happend at one divde by button
    if(eventSource == BtnODB){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.ONEDIVIDEBY, calReader()));
    }

    //check if event happend at sin button
    if(eventSource == btnSin){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.SIN, calReader()));
    }

    //check if event happend at cos button
    if(eventSource == btnCos){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.COS, calReader()));
    }

    //check if event happend at tan button
    if(eventSource == btnTan){
      calWriter(cal.MoreCalculate(Cal.MoreMathOperators.TAN, calReader()));
    }

    //check if event happened on equals button
    if(eventSource == btnEquals){
      calWriter(cal.EqualsCalculate(calReader()));
    }

    //check if event happened on clear button
    if(eventSource == btnClear){
      calWriter(cal.reset());
    }

    CalText.selectAll(); //selects all text in the CalText JTextArea
    }

    //READER METHOD.. gets value in CalText and returns it as double value
    public Double calReader(){
      Double num;
      String s;
      s = CalText.getText(); //gets text in the CalText JTextArea
      num = Double.valueOf(s); //gets double value from the string s and stores it as num

      return num;
    }

    //CALWRITER METHOD.. gets a number and checks if it is a number and sets the text in CalText.
    public void calWriter(final Double num){
      if(Double.isNaN(num)){
          CalText.setText("");
      }else{
          CalText.setText(Double.toString(num));
      }
    }
}
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    We can see from when a new instance of the gui is created the {`constructor`} assigns the data members to new instances of buttons and the calculator gui objects. Then when the run method is called these buttons and
                    other gui objects are added to the panel and sets the panel to visible. The cool thing we can do here to limit the amount of code we have to write is loop around the number buttons adding them to panel and
                    attaching an event listener. When the event is triggered we go and get the value from the event source so if it was triggered on button 1 then the value from the event source would be 1 and we replace the
                    CalcText value with this. By using this methodology we are able get the value from the buttons without having to repeat code.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Now if to find what button operator was clicked. We gave all of our math operator buttons a name when we instantiated them so that when an event is triggered we check the event source to see if it happened on one of
                    our math operator buttons. After finding what button the event triggered on we call the correct method from the Cal object and then we pass the value from CalText using the calReader method. This is all done inside
                    the writer method which will output the result to the CalcText. To do this we must check if it is a number. If it is we must change it to a string. If it is not then set the CalText to “” so nothing is outputted.
                    Let’s now look at the Cal class and the logic that is applied when the methods are called.
                </Block>

                <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
{`
package super_simple_calculator;

import java.text.Normalizer;


public class Cal {
    //instance variables
    private Double num1, num2;

    //BASICMATHOPERATORS INNER CLASS.. enum is used as the math operators are constants
    public enum BasicMathOperators{
        NORMAL, ADD, MINUS, MULTIPLY, DIVIDE
    }

    //MOREMATHOPERATORS INNER CLASS.. set as type enum as they are constants
    public enum MoreMathOperators{
      SQUARE, SQUAREROOT,ONEDIVIDEBY, COS, TAN, SIN
    }

    private BasicMathOperators method = BasicMathOperators.NORMAL;

    //BASICCALCULATE METHOD.. cancluates using the basic math operator constants
    private Double BasicCalculate(){
      if(method == BasicMathOperators.NORMAL){
          return num2;
      }else if(method == BasicMathOperators.MULTIPLY){
          return num1 * num2;
      }else if(method == BasicMathOperators.DIVIDE){
          return num1/ num2;
      }else if(method == BasicMathOperators.MINUS){
          return num1 - num2;
      }else if(method == BasicMathOperators.ADD){
          return num1 + num2;
      }else if(method == BasicMathOperators.MINUS){
          return num1 - num2;
      }

      //Hopefully will never be reached.
      throw new Error();
    }

    //CALCULATEBASIC METHOD.. checks the action the user wants to do and either returns not a number or passes to the BasicCaculate method.
    public Double calculateBasic(BasicMathOperators newMethod, Double num){
      if(method == BasicMathOperators.NORMAL){
          num2 = 0.0;
          num1 = num;
          method = newMethod;
          return Double.NaN; //not a number.. NAN is something that cannot be represented as a number
      }else{
          num2 = num;

          num1 = BasicCalculate();
          method = newMethod;
          return num1;
      }
    }

    //EQUALSCALCULATE METHOD.. if number is equal
    public Double EqualsCalculate(Double num){
      return calculateBasic(BasicMathOperators.NORMAL, num);
    }

    //RESET METHOD.. reset calculator
    public Double reset(){
      num1 = 0.0;
      num2 = 0.0;
      method = BasicMathOperators.NORMAL;

      return Double.NaN; //not a number
    }

    //MORECALCULATE METHOD.. calculates using the more operator constants.
    public Double MoreCalculate(MoreMathOperators newMethod, Double num){
      if(newMethod == MoreMathOperators.SQUARE){
          return num * num;
      }else if(newMethod == MoreMathOperators.COS){
          return Math.cos(num);
      }else if(newMethod == MoreMathOperators.ONEDIVIDEBY){
          return 1/num;
      }else if(newMethod == MoreMathOperators.SIN){
          return Math.sin(num);
      }else if(newMethod == MoreMathOperators.TAN){
          return Math.tan(num);
      }else if(newMethod == MoreMathOperators.SQUAREROOT){
          return Math.sqrt(num);
      }

      //Hopefully will never be reached.
      throw new Error();
    }
}
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Because we only can use two numbers in the calculator these are set as final. We do enumeration to add our math operators as constants so they cannot change. We separate these math operators into two separate
                    enumerations, basic and more. How to handle the numbers passed is determined by these operators. For instance when Cal.BasicMathOperators.ADD is called we go and take the value passed with it from the CalText
                    and sets the method to ADD. It then assigns the value passed to num1. Now next time calculateBasic is called it is called from the equal’s method which passes the next value which is assigned to num2. Next
                    num1 is reassigned to the value of Basic calculate which if you remember method has been set to add so this will add num1 and num2. Now we need to set method back to NORMAL and lastly return the computed
                    value num1 which will be displayed by the gui in calcText. I enjoyed making this project a lot because it challenged me to really think through the logic and work it step by step to return the correct values.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 12/04/2016
                </Block>
            </Block>
        )
    }
}

export default Calculator;