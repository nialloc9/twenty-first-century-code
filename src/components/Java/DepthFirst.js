import React, { Component } from "react";
import {Block, CodeBlock, SoftLink, Image, Link} from "../Common/Styled";
import depthFirst from "../../static/images/projects/depthFirst/depthFirst.png";
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
            src={depthFirst}
            margin="auto"
            size="large"
            alt="Search image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/nialloc9/depth-first-algorithm"
          >
            GitHub
          </Link>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Depth first begins at the root node and inspects all the nodes in it's
          branch before moving to it's neighbouring node and traversing all it's
          children. It does this over and over untill all branches in the tree
          have been inspected.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          A stack is commonly used to implement this algorithm. Get first
          element in the stack. Traverse it. Move on to second and traverse and
          so on. It is commonly used for solving puzzles such as mazes where
          there is only one solution to be found.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
package depthfirst;

/**
 *
 * @author niall o connor
 */
import java.util.*;
 
public class DepthFirst
{
    private final int vertices; // number of vertices
 
    // Represents the tree of nodes
    private final LinkedList<Integer> adj[];
 
    DepthFirst(int v)
    {
        // add a new list with number of vertices as adjacent LinkedLists
        vertices = v;
        adj = new LinkedList[v];
        for (int i=0; i<v; ++i)
            adj[i] = new LinkedList();
    }
 
    // add an edge to the correct node
    void addEdge(int v, int w)
    {
        adj[v].add(w);
    }
 
    // A utility function that traverses the tree
    void DFSUtil(int v,boolean visited[])
    {
        // Mark the current node as visited and print it
        visited[v] = true;
        System.out.print(v+" ");
 
        // Recursively visit all nodes adjacent
        Iterator<Integer> i = adj[v].listIterator();
        while (i.hasNext())
        {
            int n = i.next();
            if (!visited[n])
                DFSUtil(n,visited);
        }
    }
 
    // The function to do DFS traversal. It uses recursive DFSUtil()
    void DFS()
    {
        // Mark all the vertices as not visited(set as
        // false by default in java)
        boolean visited[] = new boolean[vertices];
 
        // For all vertices traverse to the bottom and visit all nodes before coming back up and traversing next branch
        for (int i=0; i<vertices; ++i)
            if (visited[i] == false)
                DFSUtil(i, visited);
    }
 
    public static void main(String args[])
    {
        DepthFirst g = new DepthFirst(4);
 
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);
 
        System.out.println("Following is Depth First Traversal");
 
        g.DFS(); // 0 1 2 3
    }
}

`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          We can see this breath first algorithm is recursive in that it calls
          its utility DFSUtil over and over untill all vertices have been
          visited fully. First we add a number of vertices and add some
          nodes(edges) to each one. Next we call the DFS method which traverses
          the vertices. Before it moves onto the next vertice it travers all the
          descendant nodes to the end. This is depth first.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          We can see clearly how we might use this algorithm to search a tree to
          find a value. We can also clearly see the difference between depth
          first that searches each vertice to the end before moving to the next
          and the{" "}
          <SoftLink to="/java/breath-first-algorithm">
            breath first algorithm
          </SoftLink>{" "}
          which searches all neighbouring vertices before moving down.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>Published on 05/09/2018</Block>
      </Block>
    );
  }
}

export default BreathFirst;
