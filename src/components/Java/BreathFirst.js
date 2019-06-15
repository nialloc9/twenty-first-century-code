import React, { Component } from "react";
import {Image, Link, CodeBlock, Block} from "../Common/Styled";
import breathFirstAlgorithm from "../../static/images/projects/breathFirst/breathFirstAlgorithm.gif";
import { remCalc } from "../../common/helpers";

class BreathFirst extends Component {
  render() {
    return (
      <Block
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image
            src={breathFirstAlgorithm}
            margin="auto"
            size="large"
            alt="Search image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nialloc9/breath-first-traversal"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Breath first begins at the root node and inspects all the neighbouring
          nodes before moving down. Then for each of those in turn it inspects
          it neighbours. It can be used to calculate the shortest distance to a
          node.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          It is commonly used in GPS systems such as google maps and in computer
          networking for things like peer to peer networks. I have heard a story
          once that on facebook any two people can be connected by using at most
          5 nodes.
        </Block>

        <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
          {`
package breadthfirstsearch;

/**
 *
 * @author niall o connor
 */
import java.util.*;
 
public class BreadthFirstSearch
{
    private int V;   // number of edges or vertices
    private LinkedList<Integer> adj[]; //simulate neibouring nodes
 
    BreadthFirstSearch(int v)
    {
        V = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }
}
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          We can see from above that we can simulate breath first traveral by
          creating a LinkedList of LinkedLists that simulates each node having
          children and neighbouring nodes.
        </Block>

        <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
          {`
package breadthfirstsearch;

/**
 *
 * @author niall o connor
 */
import java.util.*;
 
public class BreadthFirstSearch
{
    private int V;   // number of edges or vertices
    private LinkedList<Integer> adj[]; //simulate neibouring nodes
 
    BreadthFirstSearch(int v)
    {
        V = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }
 
    // add an edge with a set width
    void addEdge(int v,int w)
    {
        adj[v].add(w);
    }
}
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Next a method to allow us to add witdths to the vertices.
        </Block>

        <CodeBlock language="java" margin={`${remCalc(20)} 0`}>
          {`
package breadthfirstsearch;

/**
 *
 * @author niall o connor
 */
import java.util.*;
 
public class BreadthFirstSearch
{
    private int V;   // number of edges or vertices
    private LinkedList<Integer> adj[]; //simulate neibouring nodes
 
    BreadthFirstSearch(int v)
    {
        V = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }
 
    // add an edge with a set width
    void addEdge(int v,int w)
    {
        adj[v].add(w);
    }
 
    // traverses from a given source
    void BFS(int s)
    {
        // a new array of boolean values to indicate if node has been visited
        boolean visited[] = new boolean[V];
 
        // Create a queue to store the nodes in
        LinkedList<Integer> queue = new LinkedList<>();
 
        // Mark the current node as visited and enqueue it
        visited[s]=true;
        queue.add(s);
 
        // traverse if not empty
        while (!queue.isEmpty())
        {
            // Dequeue the next element from the queue
            s = queue.poll();
            System.out.print(s+" ");
 
            // iterator over the node marking it's neighbours as visited
            Iterator<Integer> i = adj[s].listIterator();
            while (i.hasNext())
            {
                int n = i.next();
                if (!visited[n])
                {
                    // mark as true and add it to the queue to be traversed over
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }
 
    public static void main(String args[])
    {

        BreadthFirstSearch g = new BreadthFirstSearch(4);

        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("An example of a breath first traversal starting from source 2 ");

        g.BFS(2);

        System.out.println("\nAn example of a breath first traversal starting from source 1");
 
        g.BFS(1);
    }
}
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          We can see above that the BFS method takes a source as a value. This
          is the starting point. This is queded and marked as visited. Then we
          loop over the queue dequeuing each neighbouring node and if it's
          neighbour is not visited adding it to the queue. This ensures that the
          traversing occurs on all neighbouring nodes.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          In conclusion we can see how easily breath first works and can be used
          as way of searching. The same principles can be taken and used to
          easily create a search method that would return when it has found what
          it is looking for.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 10/09/2018</Block>
      </Block>
    );
  }
}

export default BreathFirst;
