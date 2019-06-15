import React, { PureComponent } from 'react'
import {Block, CodeBlock, Image, Link} from '../Common/Styled';
import start from '../../static/images/projects/listMaker/start.png';
import { remCalc } from '../../common/helpers';

class ListMaker extends PureComponent{

    render(){
        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={start}
                        margin="auto"
                        size="large"
                        alt="List maker start"
                    />
                </Block>

                <Block>
                    Source code: <Link target="_blank" rel="noopener noreferrer" href="https://github.com/nialloc9/jsListMakerModule">GitHub</Link>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    This is a really cool project that uses moustacheJs, jQuery, and a pubsub to create a module that be added to an existing or new project seamlessly and allow other modules
                    to ‘subscribe’ to it so  they listen for changes in it. So let’s get started the first thing is import all the dependencies required which was moustacheJs and jQuery. Next was to add the pubsub. Pubsub actually means publish subscribe.
                    What it means by this is a piece of code that allows us to ‘listen’ for changes in other modules and if there is a change to perform a set of actions. It is a really powerful tool
                    and definitely one I would recommend. Below is our pubsub:
                </Block>

                <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
{`
var pubsub = {
      pubsub: {}, //no events at default

      subscribe: function (eventName, fn) { //get event name and what function you want to happen
          this.pubsub[eventName] = this.pubsub[eventName] || []; //if event already exists
          this.pubsub[eventName].push(fn); //add event to array
      },
      unsubscribe: function(eventName, fn) { //get event name and what function you want to happen
          if (this.pubsub[eventName]) { //check if event is present
              for (var i = 0; i < this.pubsub[eventName].length; i++) {
                  if (this.pubsub[eventName][i] === fn) {
                      this.pubsub[eventName].splice(i, 1);
                      break;
                  }
              }
          }
      },
      publish: function (eventName, data) {
          if (this.pubsub[eventName]) { //check if eventName exists
              this.pubsub[eventName].forEach(function(fn) { //do function for each event
                  fn(data);
              });
          }
      }
  };

module.exports = pubsub;
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    As you can see the pubsub is an object that has a property of pubsub. This property is an object that stores the information of what to do if different actions occur. It is an object of different functions
                    from different modules that are waiting to see if an event occurs. So we might have an event called ‘INFO_UPDATED’ and then a list of actions we want to occur. If you look at the publish method it loops
                    through every action stored in the pubsub with a specified eventName and calls that {`function`} returning data as it’s argument. The subscribe method pushes a new {`functionName`} onto the array where the eventName
                    is the same as the eventName we specified or else creates a new array called eventName to push onto. And lastly the unsubscribe method splices our {`function`} from the array when we don’t want to listen anymore.
                    The power of this and applications for it is huge because now we can have modules that are listening to changes in other modules.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Next let’s look at our js for the actual list maker:
                </Block>

                <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
{`
var list = (function () {

      //dependencies
      var $ = require('jquery');
      var Mustache = require('mustache');
      var pubsub = require('./pubsub');

      //default list
      var list = ['a', 'b'];

      //cache DOM
      var $el = $('#addToListModule');
      var $input = $el.find('input');
      var $btn = $el.find('#addToListBtn');
      var $ul = $el.find('ul');
      var template = $el.find('#addToListTemplate').html();

      //bind events
      $btn.on('click', addToList);
      $ul.on('click', 'i.del', deleteFromList);

      _render();

      function addToList(listItem) {
          var item = (typeof listItem === "string") ? listItem: $input.val();
          list.push(item);
          _render();
          pubsub.publish("listChanged", list.length);
          $input.val('');
      }

      function deleteFromList(e){
          var i;
          if(typeof e === "number"){
              i = e;
          }else{
              var $remove = $(e.target).closest('li');
              i = $ul.find('li').index($remove);
          }

          list.splice(i, 1); //remove 1 with index of i

          _render();
          pubsub.publish("listChanged", list.length);

      }

      function subscribe(functionName){
          pubsub.subscribe("listChanged", functionName);
      }

      function unsubscribe(functionName){
          pubsub.unsubscribe("listChanged", functionName);
      }

      function returnList(){
          return list;
      }

      //private function
      function _render() {
          $ul.html(Mustache.render(template, {list: list}));
      }

      //api
      return{
          addToList: addToList,
          deleteFromList: deleteFromList,
          subscribe: subscribe,
          unsubscribe: unsubscribe,
          returnList: returnList
      }
})();

module.exports = list;
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    So now we must do our dependencies. We require jQuery and mustache. Mustache is a convenient tool that allows us to easily output data held in json or array objects to the screen where
                    needed. We will be using it to bind data to our template.
                </Block>

                <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
{`
<script id="addToListTemplate" type="text/template">
    {{#list}}
      <li>
        <span>{{.}}</span>
        <i class="del">X</i>
      </li>
    {{/list}}
</script>
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Revealing patterns are very useful and pubsubs are very powerful so I hope you enjoyed this project and please any feedback is welcome.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 24/09/2016
                </Block>
            </Block>
        )
    }
}

export default ListMaker;