import React from 'react'
import Article from '../Common/Article';
import instantMessengerRunning from '../../static/images/projects/javaInstantMessenger/instantMessengerRunning.png';
import burningHouse from '../../static/images/projects/javaInstantMessenger/burningHouse.png';

export default () => {
    const data = [
        {
            type: "image",
            size: 'massive',
            src: instantMessengerRunning,
            alt: 'Java instant messenger running'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/java_simple_calculator'
        },
        {
            type: 'paragraph',
            text: `This project is actually a combination of two projects. First a server side project and second a client side project. Because the server side is waiting
            for someone to connect we need to create a client side to enable other people to connect. Let’s look at the server side first. It has two classes in it Server and ServerTest. ServerTest is the class
            responsible for running the client side and creates an instance of Server.`
        },
        {
            type: 'code',
            code: `
package server;

import javax.swing.JFrame;

public class ServerTest {
    public static void main(String[] args) {
        Server serve = new Server();
        serve.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        serve.startRunning();
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `As you can see it creates an instance of Server. Because Server is a child of the class JFrame we give it a default close operation. If we didn’t we would never be able to close it. And lastly we put the server
            side running so the client can connect. Let’s look at the Server class and see how it does this.`
        },
        {
            type: 'code',
            code: `
package server;

import java.io.*; //For streams
import java.net.*; //For sockets and networking
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
/**
This program will sit on a public server that anyone can access.
*/
public class Server extends JFrame{
    private JTextField userText; //For writing messages
    private JTextArea chatWindow; //Displays message area
    private ObjectOutputStream output; //Output stream to connect to something(file or socket)
    private ObjectInputStream input; //input stream to recieve data
    private ServerSocket server; //Initalize the socket
    private Socket connection; //This will be the socket that java connects the user to so they can chat

    //constructor that creates a GUI for the user to use
    public Server(){
        super("Awesome instant messenger!");
        userText = new JTextField();
        userText.setEditable(false);
        userText.addActionListener(
            new ActionListener() {
        @Override
            public void actionPerformed(ActionEvent e) {
                //Send the messaage
                sendMessage(e.getActionCommand());
                userText.setText("");
            }
        }
    );

        add(userText, BorderLayout.NORTH);

        chatWindow = new JTextArea();
        add(new JScrollPane(chatWindow));
        setSize(300, 150);
        setVisible(true);
    }

    //Set up and run the server
    public void startRunning(){
        try{
            server = new ServerSocket(6789, 100);

            while(true){ //runs forever
                try{
                    waitForConnection(); //Wait for someone to connect to our server
                    setUpStreams(); //set up input and output
                    whileChatting(); //Allows us to send messages back and forth while we chat
                }catch(EOFException eOFException){
                    showMessage("\n Server ended the connection! ");
                    eOFException.printStackTrace();
                }finally{
                    closeCrap(); //Close all sockets etc
                }
            }

        }catch(IOException ex){
            ex.printStackTrace();
        }
    }

    //wait for connection, then display connection information
    private void waitForConnection() throws IOException{
        showMessage("Waiting for someone to connect.. \n");
        connection = server.accept();
        showMessage("Now connectioed to "+ connection.getInetAddress().getHostName());
    }

    //set up the streams to send and recieve data
    private void setUpStreams() throws IOException{
        output = new ObjectOutputStream(connection.getOutputStream());
        output.flush();
        input = new ObjectInputStream(connection.getInputStream());
        showMessage("\n Streams are now set up! \n");
    }

    //During the chat conversation
    private void whileChatting() throws IOException{
        String message = "You are now connected!";
        sendMessage(message);
        ableToType(true);
        do{
            //Have convo while clients are active
            try{
                message = (String) input.readObject();
                showMessage("\n" + message);
            }catch(ClassNotFoundException ex){
                showMessage("\n can't figure out what user sent. Wierd object sent.");
                ex.printStackTrace();
            }
        }while(!message.equals("CLIENT - END"));
    }

    //Close all the streams and sockets after user is done chatting.
    private void closeCrap(){
        showMessage("\n closing connections... \n");
        ableToType(false); //Stop users ability to stop while shutting down

        try{
            //close streams
            output.close();
            input.close();
            //close socket
            connection.close();
        }catch(IOException ex){
            ex.printStackTrace();
        }
    }

    //send a message to the client. sendMessage() sends a message like an error message or a "connecting..." message. showMessage() shows messages from the clients to each other.
    private void sendMessage(String message){
        try{
            output.writeObject("SERVER - " + message);
            output.flush(); //Remember good practice to flush after outputing data to the client
            showMessage("\n SERVER" + message);    }catch(IOException ex){
            chatWindow.append("\n ERROR: CANT SEND MESSAGE.");
            ex.printStackTrace();
        }
    }

    //this updates the chatWindow to show new messages
    private void showMessage(final String message){
    //most swing components are not thread safe
    SwingUtilities.invokeLater(
            new Runnable() {
        @Override
            public void run() {
                chatWindow.append(message); //Add message to end of document.
            }
        }
    );
    }
    private void ableToType(final boolean tof){

        SwingUtilities.invokeLater( //Again we are updating the GUI so we need SwingUtilities.invokeLater
            new Runnable(){
        @Override
            public void run(){
                userText.setEditable(tof);
            }
        });
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `To allow the user to chat we first need a graphical user interface. We extend JFrame to inherit it’s properties and methods. We then create some swing components for the user to view and output data.
            To send data across networks we need to use sockets. These come from the java.net package and we also need to set up streams so we import the java.io package too. We use the "constructor" to create the
            graphical user interface and to add actionListeners to the JTextField userText for sending messages. Notice we set this to editable to false to begin with. Once a connection is made we will change this.`
        },
        {
            type: 'paragraph',
            text: `Now let’s look at the startRunning method that we briefly spoke about earlier. Inside this we set up our socket. We assign the socket a port number of 6789 and a backlog (queue length) of 100. The backlog is the
            amount of users who can wait to connect. If we never did this and too many people tried connect the server would crash. We need to wrap all of this in a try catch block because when setting up sockets an IO exception
            can be thrown. Next we set up our streams. Notice how we have set up an infinite loop?  True is always true. We did this because we want the server to be always listening for anyone who is trying to connect.`
        },
        {
            type: 'paragraph',
            text: `To set up a stream we need to first create a try, catch, finally block to handle an end of stream exception that may occur. We added the finally here so we can close off our stream at the end regardless if there is an exception or not.
            If we don’t we will have empty sockets and this will eat through the memory so is a waste of the server resources. This is a bit like baking a cake. If we want to bake a cake we first get all the ingredients together and
            put it in the oven. If that cake bakes correctly or not we still want to turn off the oven so the house don’t burn down.`
        },
        {
            type: "image",
            src: burningHouse,
            size: "large",
            alt: "Java instant messenger don't close sockets will eat up memory"
        },
        {
            type: 'paragraph',
            text: `Let’s now look at what happened inside the try, catch, finally block. Three methods were called. The first waitForConnection waits for a user to try and connect and when they do calls the accept method from the server object to put the connection on a socket.
            After this a message is outputted to the gui with the ip and hostname that the socket is connected to. Next we set up streams using the setUpStreams method. We need to create two streams. An input and an output stream.
            To do this we need to give each of a high level stream chained to a low level stream. We do this because we need the low level stream to do the low level language actions of setting up the stream and then we need the
            high level stream to read or write the data back as readable data. For the output stream to ensure that the buffer doesn’t retain any data and the whole message is sent we flush it. It’s important to note that when
            setting up sockets and stream IO exceptions can be thrown and therefore must be handled or ducked.`
        },
        {
            type: 'paragraph',
            text: `Now that the streams and sockets are all set up it’s time to look at the whileChatting method. First we output a message to the screen that it is time to chat and we also change the input JTextfield editable to true to allow for input.
            Next we create a do while loop that keeps going until our message variable doesn’t equal CLIENT – END. This is the magic phrase that will close the chat. While this is not the case we read the next object coming from the
            client and cast it to a string. We wrap this in a try catch block because it can throw a ClassNotFoundException. This exception will only usually be caught when the client is trying to send something other than an object
            and can be a sign they are up to no good.`
        },
        {
            type: 'paragraph',
            text: `Remember the closeCrap method? Well now let’s look at it. See how it closes all our streams and sockets? This is important because we don’t want to leave these open when the chat is closed. Also these must be wrapped in a try catch
            because they can throw an IO exception when attempting to close.`
        },
        {
            type: 'paragraph',
            text: `When sending a message we use the writeObejct method that throws an IOException so must be wrapped in a try catch to handle it. Again here we flush it after sending to make sure no data is left in the buffer. Now we show the message using
            the showMessage method. This method updates the chat window to show new messages. However, we have a problem. Because swing was not wrote to be a thread safe GUI toolkit all GUI updates should happen from a single thread
            to avoid deadlock. In swing this is the event dispatcher thread (EDT). Basically, this tells it to update later after all other tasks are completed to make sure it is thread safe and that it doesn’t happen in the middle
            of something important. If you are already on the event dispatch thread (EDT) which is always the case when responding to user initiated events such as clicks and selections it is okay.  (The actionPerformed methods etc,
            are always called by the EDT.). But if you are not you must invoke it later using the invokeLater method from SwingUtilities. We must use this because we are using a network thread not the EDT. This allows us to update
            the gui without having to close and load it again. It is also worth noticing that some swing components are labelled thread safe in the API but most are not. Notice now why we created a "function" to show a message and to
            make the JTextField editable. It was to keep everything thread safe and above board.`
        },
        {
            type: 'paragraph',
            text: `Now let’s check out what’s happening in the other project, the client side and see how it communicates with the server side. This will be a much shorter description as a lot of the principles from the server side apply to client
            side too. First there are two classes same as with server. Here is the ClientTest class responsoible for running the client side.`
        },
        {
            type: 'code',
            code: `
package client;

import javax.swing.JFrame;

public class ClientTest {
    public static void main(String[] args){
        Client user;
        user = new Client("127.0.0.1");
        user.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        user.startRunning();
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `This is all pretty much the same as the server side except for one thing. Notice we pass an ip address to the "constructor" of client. Let’s look at this class and find out why. The only new part of the code that
            is different to the server happens is how we connect. Because we don’t need to create always be listening for someone to connect because we are the ones connecting to the server it is simpler. Inside the
            connectToServer method we create a socket that takes uses the InetAddress class. This is from the java.net package and it represents an internet protocol(IP) address. We get this address by the name we passed
            in for the "constructor" when creating the instance of our class 127.0.0.1 above. Also we need to pass in the socket to connect to. This is the same as the one on the server side.`
        },
        {
            type: 'code',
            code: `
package client;

    import java.io.*;
    import java.net.*;
    import java.awt.*;
    import java.awt.event.*;
    import javax.swing.*;
    
    public class Client extends JFrame{
    
        private JTextField userText;
        private JTextArea chatWindow;
        private ObjectOutputStream output; //Out to server
        private ObjectInputStream input; //into client
        private String message;
        private String serverIP;
        private Socket connection;
    
        //constructor
        public Client(String host){
        super("Awsome client for instant messenger");
        serverIP = host;
        userText = new JTextField();
        userText.setEditable(false);
        userText.addActionListener(
            new ActionListener() {
        @Override
            public void actionPerformed(ActionEvent event) {
                sendMessage(event.getActionCommand()); //Send the message in the text area userText
                userText.setText("");
            }
        }
    );
        add(userText, BorderLayout.NORTH);
        chatWindow = new JTextArea();
        add(new JScrollPane(chatWindow), BorderLayout.CENTER);
        setSize(300, 150);
        setVisible(true);
    }
    
    //connect to server
    public void  startRunning(){
        try{
            connectToServer();
            setUpStreams();
            whileChatting();
        }catch(EOFException ex){
            showMessage("\n Client terminated the connection");
        }catch(IOException ex){
            ex.printStackTrace();
        }finally{
            closeCrap();
        }
    }
    
    //connect to the server
    private void connectToServer() throws IOException{
        showMessage("Hold on, attempting connection.");
        connection = new Socket(InetAddress.getByName(serverIP), 6789); //InetAddress.getByName(serverIP) returns a ip address.
        showMessage("Connected to: " + connection.getInetAddress().getHostName());
    }
    
    //set up streams to receive and send messages
    private void setUpStreams() throws IOException{
        output = new ObjectOutputStream(connection.getOutputStream()); //to server
        output.flush(); //good practice
        input = new ObjectInputStream(connection.getInputStream()); //from server
        showMessage("\n Streams are connected. \n");
    }
    
    //while chatting with server
    private void whileChatting() throws IOException{
        ableToType(true);
    
        do{
            try{
                message = (String) input.readObject();
                showMessage("\n "+ message);
            }catch(ClassNotFoundException ex){
                showMessage("\n don't know object type");
            }
        }while(!message.equals("SERVER - END")); //Do while message from server dosn't say SERVER - END
    }
    
    //close all the streams and sockets
    private void closeCrap(){
        showMessage("\n closing everything down...");
        ableToType(false);
    
        try{
            input.close();
            output.close();
            connection.close();
        }catch(IOException ex){
            ex.printStackTrace();
        }
    
    }
    
    //send messages to server
    private void sendMessage(String message){
        try{
            output.writeObject("CLIENT - " + message); //Sends it
            output.flush();
            showMessage("\n Client - " + message); //prints it to screen
        }catch(IOException ex){
            chatWindow.append("\n message send failure.");
        }
    }
    
    //update the GUI so message is shown in the GUI
    private void showMessage(final String m){
        SwingUtilities.invokeLater(
            new Runnable() {
                @Override
                    public void run() {
                        chatWindow.append(m);
                    }
                }
        );
    }
    
    //allows user to type text into the textbox
    private void ableToType(final boolean tof){
            SwingUtilities.invokeLater(
                new Runnable() {
                    @Override
                        public void run() {
                            userText.setEditable(tof);
                        }
                }
            );
    }
}
            `
        },
        {
            type: 'paragraph',
            text: `I enjoyed making this project to make use of sockets and streams and to demonstrate a practical use for them. It really is a good way to understand how they work and it is awesome to see.
            I hope you enjoyed my java projects.  I will be adding some more soon. Thank you.`
        },
        {
            type: 'published',
            date: `22/12/2016`
        },
    ];

    return <Article data={data} />;
};