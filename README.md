# React.js Memory Card App
## The Odin Project React.js section memory-card assignment: 

 ## Create a new project using create-react-app.
 ### Take a little bit of time to think about how you want to implement your application,the features you want to implement, which components you need,and how to structure your application. 

> Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the best score you achieved thus far. 
>
> You also need a couple of cards that display images and possibly informational text.  
>  There should be a function that displays the cards in a random order anytime a user clicks one.   
>  Be sure to invoke that function when the component mounts.
>
>
>  Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components. We suggest you use functional components and therefore hooks in this project.


# My approach
The App component will contain the entry dialogue, giving instructions to the user, and The main components.  
The main components in this app are simply Scoreboard and DisplayPanel.  


## Scoreboard
> This component is very simple and contains only a useEffect hook to update the highscore when the current score is greater than it.  
> The score and highscore are displayed, and when the user gets GameOver, 
> an appropriate class is added to the score <div> so a style can be added to it.  
  
## DisplayPanel
  > This component acts as the container for the Card components, as well as managing the scrambleArray feature when a card is clicked.
  > An Array simply containing ID's is created, and is passed into the return statement as a map function, creating all the Cards, using the ID's from the object.
  > imageLinks were created in a seperate file, those are then passed as props into each card Component.
  

