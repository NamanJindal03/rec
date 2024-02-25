React -> 


React history ||| React Internal Working -> 

React DOM api 
React API

React.create 


JSX -> HTML feel -> 
	HTML and JS vs JSX

	1) class vs className -> 
	2) Styling -> Inline -> 
		JSX -> object -> style = {{textAlign: center}}
	3) - -> camelCase ->
	4) it cannot have more than 1 primary parent -> 
		function sample(){
			return (
				<>

				</>
			)
		}
	5) comments ->
	6) HTML vs JSX -> Strictness -> brackets -> 
		<input>
			HTML is a very forgiving markup ->
		React ->   

	6) condition rendering -> a ? c: d
		condition -> 
		rendering ->
		JSX -> map -> loop over, for loop, for in, for of 


	10 components -> 
		Grand Parent
			Parent
			Parent2 
			Parent3
				CHild3
				Child2 
					GrandCHild1

1 js -> 

dependencies -> transitive dependency -> 


React -> library -> 
Bundler -> Webpack, vercel
transpiler -> babel 
third party packages -> .env, bcrypt and tons more
npm 


Props 
State 
Components ->




Question -> conditional rendering, usage of loops in jsx, and jsx

const cards = [
	{header: "title1", body: "body1", footer: "subscript1", isFooter: false},
	{header: "title2", body: "body2", footer: "subscript2"},
	{header: "title3", body: "body3", footer: "subscript3"},
	{header: "title4", body: "body4", footer: "subscript4", isFooter: false},
]

CARD -> separate component file -> props ->

Components VS Element -> 

AdditionalCardHolders 
	BigCard
		BcCardHeading
		PictureComp
		FooterImageHolder
			ThumbailImage

React has unidirectional flow of data -> Ideal React -> 
	Hacky React --> 
	Other frontend frameworks 
		Vue and Angular (FE framework) -> bi directional flow of data

App.js
	PropertyHeader
	PropertyGallery
	LeftPropertyAndBookingDetails
		BasicPropertyDetails
		PropertyOfferings
		BookingScheduler
			Calendar
	RightBookingDetails
		SummaryAndCost
	ReviewComponent
		Card

Question 1 - prop passing
const dt1 = 'sample data'
const dt2 = 'sample data 2'
const obj = {dt1: 'some data', dt2: 'some data 2'}

** challenge -> do the above by completely desctructing in the parameter itself

Question 2 - Print all key value pairs after passing the obj as props and then iterating in jsx.
const obj = {one: "1", two: "2", three: "3", four: "4", five: 5} (there can be 100 more key value pairs)

why is error handlign in react a bit tricky ->
ideally I was getting erorr on some other line, the browser pointed some other line -> 
reason being -> bundled and then it goes to browser -> so sometimes browser confused -> happened -> 

we are not directly putting the react code on browser-> it goes through a certain compialtion -> bundling etc etc. 

Components ->
Props ->


State -> 

props -> send data from a higher component to a lower component. 

state -> data storage -> dynamic in nature -> 
variables are also data storage, they can also be dynamic in nature? 

why the need of state?
1) when the component gets rerendered the normal variables reset ->
2) automatic rerender 

state is something which is being given to us by react.  

why not normal vairables???

let [state, setState] = useState(0);


const arr = [10, 20, 30, 40, 50];
const [a,b,c,d,e] = arr;
const arr2 = arr;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

arr2[0] //
arr2[1]
arr2[2]
arr2[3]
arr2[4]



Initially All the functional components were stateless and the functional components were also referred to as Dumb components. 

but from react 16 -> the concept of hooks was introduceed (useState, useEffect and many other)
which allowed functional componnets to also have state inside them.

functioanl components >>>>> class components (later) 

1) documentations/ reference -> class components -> 
2) If a company gies you a task to move from class componeetn to functional components you should be able to understand that 
3) class components give a bit more information about the peclarities of react
4) Interviews sometimes ask about class components 


Internal part -> 

blackbox?

function getNameFromRollNumber(rollnumber) -> 10k -> ABCD -> Author

defg -> 
codebase -> ABCD has already contributed to it. 

const [name, setName] = useState('naman');
setName(name + 'abcd'); //namanabcd

React only rerenders if there is a change in the updatedValue and the prevvalue

const isComponentInitatedBefore = false;
function useState(initialValue){

	//in non primitive data types -> pass by reference hence we have to create a new address -> 
	//object, array, date
	//deepCopy


	if(!isComponentInitatedBefore){
		let someInternalVariable = initialValue === 'non primitive' ? deepCopy : direct value
	}

	function internalFunctionToUpdateStateAndRerender(updatedValue){
		//compare someInternalVariable with updatedValue
		if(delta){
			//someInternalVariable = updatedValue;
			//perform rerender
		}
		//do nothing
	}
	
	isComponentInitatedBefore = true;
	return [someInternalVariable, function];
}








react Internal code ->
function deepCopy() {}
	function useState(initialValue){

		//
		if(Array.isArray(initialValue) => deepCopy(initialValue))

		let internalVariable = initialValue;

		function internalFunctionToUpdateStateAndRerender(updatedValue){

			//checks for delta (difference)
			internalVariable = updatedValue;
			if(difference){
				//rerenders
				//return [internalVariable, internalFunctionToUpdateStateAndRerender]
			}
			
		}

		return [internalVariable(deep copied), internalFunctionToUpdateStateAndRerender]
	}



React - version 16 -> 

version 16 of react is not comptaible with version 20 of node -> 

18 -> 

to sweithc node versions ->
1) uninstall and download new 
2) use nvm -> nvm? allows us to hold multiple versions of node together. 



company -> 

multiple repositories -> node 16
node 20 
node 18

uninstalling and install node -> 
hence usecase of nvm -> 

1-d array 
arr -> 8 indexes and 9 vlaues ->

['circle', 'circle', 'cross', same random]

//the logic for rows -> 
if(arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != '')
if(arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != '')
if(arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != '')

frameworks are rigid
frameworks are coupled -> 


angular -> routing -> default routing provided by angular -> external library -> a ton of effort -> 

library -> deccoupled -> which allows us to use things which are not directly given by react to even integrate -> 

react -> 2 api -> react, react-dom

state management -> use your library ->
routing -> react-router-dom (recommeded) -> integrate with any 3rd party library as well.

librarues are less bulky whereas frameworks are more bulky -> reason beauce frameworks have a lot of code built in. 

libraires have generally a easy learning curve whereas frameworks cana get tricky. 


React -> library -> required code in it -> you obsiouly need external packages ->npmjs 

npm -> node package manager -> 

1) npmjs sumamry text -> 


react is opensource true or false?
what is opensource??

react maintained by facebook -> if you submit a PR as an external developer it will be reviewed byt he facebook team-> 

merged -> main branch -> Meta team 

PR -> pull requests -> 

downfall of using an opensourced library??
login signup code -> library -> which does that job for me -> 

1) if any vulnerability then all the companies using that open sourve would be at risk
2) original developer -> removed the code 

React -> 

xyz -> opensourceed -> library -> 2000 companies or indivuals started using 

100 weekly downloads -> 
1) iut might be removed 
2) their might not be future support
3) their might be many many vulnerabilites out there so it might be better youc ode on your onw. 

Manager -> build 5 component ->

Card, Modal, 


manager -> task -> found library -> directly 
fresher -> 90% scenarios -> 


1200 -> 
1) they are very very very particular cases (edge of eedege cases)
2) copmpany is constantly working on to fix those bugs -> comapny and the opensource developers 

thats why the patch, minor and major updates -> 


components -> compots 

Patch ->simple bug fix
Minor -> major bug fix, or big bug fix -> 
Major -> code breaking changes -> developers need to upgrade to major version with very high cautation because the moment they will do that their previosu code might stop workign

Version ->  10.2.1 -> 10.3.0 -> 11.0.0

react -> 17 to 18 -> 
17's code wotn work on 18 -> make a lot of changes ->m 



ABCD -> 
	Manager -> notification feature -> 

	Manager says to take a pull from branch main ->

	1) download the repository 
	2) take the pull from the branch main -> 

		default -> master -> 
		git checkout main -> 
		git pull -> git pull origin main  -> taking the latest updates
		git checkout -b "branch_name" -> git checkout -b "feature/notification" -> code anything 
		once the feature is done -> the reviewer would merge the code with main 

revert -> rollback -> your commit would be rrmeoved 


2 persons are owkring on a single feature -L> 



git vs github?
git is a technology
github is the platform || bitbucket (Atlassian) || gitlab (most) -> corporates -> Azure -> (Cloud Platforms) 

AWS -> 
EC2 -> server
S3 -> Storage -> 4 -> 
Lambda -> serverless architecture ->
dynamodb -> mongo ->
APi gateway -> Load balancer -> 
ELB 
ELS 


TIC TAC TOE ->
1) Building the basic tic tac toe through react 
2) Integrating external libraires -> reactstrap, react-icons, react-toastify
	A) Understandig the functioanlity of libraires individually
	B) INtegrating them
3) Optimzations

Featrures -> 
1) Reset -> When their is a draw or Winner declared (game is not ongoing) -> conditionally I would appear a button -> resett
2) we would be displaying who the winner is at the end
3) Toastify -> Toast ->  

Bonus -> 
To choose the starting player ->
Highliting -> distinguishing what is the winning pattern ->  

//Array(9).fill("empty")


Question on key -> *** -> very high chance of coming in interveiws -> 
1) Why we need key
2) why we shouldnt use array indexes as keys



[
	{name: naman, id: 0}, index 0
	{name: a, id:1}, index 1
	{name: abhishek, id:2}, index 2
	{name: rohit, id: 3} index 3
]


	{name: sabir, id:5} index 0
	{name: naman}, index 1
	{name: a}, index 2
	{name: abhishek},index 3
	{name: rohit}index 4


key concepts covered ->
1) Keys and why indexes shouldnt be keys
2) Tic tac toe logic built in base react
3) using react-icons library
4) Git vs github
5) Working with a generic reset function in react


A very big project -> Organising the components and a little bit about rest of the possible scnearios


6 types of buttons -> 

<button> </button>

Button -> Component -> Props ->
On the basis of those props you would inculcate some kidn of conditional rendering

Input -> (type === prop )
	type = "text"
	type="number"
	type ="dropdown"

Instructor 2 -> 4-5 common components 
4-5 advavnce components -> Modal

React has certain advantages -> optimization, writing less code, reactivity, quick
	virtual dom and real dom ->
	keys -> I2 ->
Batching ->
	setState
	setState
	setState
	setState
	setState

functional component vs class components ->
stateless components vs statefull components ->

controlled vs uncontrolled component ->
	
	unControlled -> if something is changing in the UI without the interfarence of react then that component is called as an uncontrolled component

	controlled -> if react is in full controll of the data in the UI then that is reffereed to as a controlled componet

let arr = [];
arr['twenty'] = 20;
console.log(arr); //

1) ERROR
2) NOT error 
	
	output?

In JS -> Array is a basically a dikhawa -> hoax -> 
Array is object only ->
Abstraction layer built over objects to make array -> 

{}, [] ->

const [arr, setArr] = useState([1,2,3,4,5]);

const [obj, setObj] = useState({name: 'naman', age: 10})

Question -> 
Update the states such that 3 in the array becomes 'abcd' as the value
age in the object becomes : 100

let key = 'random';
let value = 'val';
let obj = {};

obj.key = value;
console.log(obj); //{random: val} wrong //	key:val

Summary:
	Forms ->
		Controlled and Uncontrolled Componets
		Created Controledd 
		Crfeated Uncontrolled
		Handled Scalability of controlled componetn forms (States and functions)

Tomorrows: 
	1) Error Handling in forms - complete -> 


1) Rewatch lecture -
2) Code the same thing that we did in the lecture on your own -> 
	put 4 different fields -> 
3) after studying those who have doubt connect wiht me before the lecture


**Extra efforts -> study the library formik -> 

There are 2 more ways to handle the form -> 
1) ref -> (we would be studying soon in the normal lectures)
2) new formData -> (this is an extra part -> tb covered in I2)

Today's Lecture -> 22/02/24
	1) Lifting the state
	2) SideEffects 
	3) -> useEffect

The component where the states resides (lives or initated) only at that place the state should be ideally changed.

REact Lifecycle (Simple) -> complex will be done later
1) Initialisation 
2) Mounting
3) Update (updatation)
4) Unmounting 

what can be the possible condition in
which this card gets removed (unmounted)

React Hooks (Functional components of react )

1) HOOK -> useEffect hook -> 

mounted function ->
updated funcntion ->
unmounted function ->


beforeMount(){
	console.log('I want to handle something before mounting')
}
beforeUpdate(){}
onUnmount()

Summary ->
	Lifting the state -> where we convered how react unidirectional property forces to to lift the state

	hacky way of passing the data from a child component to parent component -> define a funciton the parent level, pass it as a prop to the child level and then pass the data from the child level by calling the funciton and we got the data from child in parent. 

	side effects 

	useEffect and a mini syntax of it


Tomorrow ->
why we need these lifecycle methods
when do we use them
how to handle the update
what is the depenedency array


revise -> 
doubts???
useEffect ->
few mini questions on that
assignemtn -> 
inclasss and post class -> 


make a polyfill of maps -> 

1) the actual function you have study its own functioanlity
2) try to replicate those functioanlity as if the funciton is not present ewith you

const arr = [1,2,3,4,5,6];
const newArr = arr.map((value, index, completeArr)=>{
	return value+index;
})

Array.prototype.myMap = function(cb){
	const newArr =[];
	for(let i=0; this.length; i++){
		const returnedValue = cb(this[i], i, this);
		newArr.push(returnedValue);
		//newArr.push(cb(this[i], i, this));
	}
	return newArr;
}

3 situations of dependency array
1) dependency array not present at all 
	A) We should never have something like this 
	B) A situation like this triggers your useEffect on both mounted and updated
	C) It can go pretty uncontrollable hence we avoid using it

2) dependency array present but blank
	A) This is what we use specifically for mounted state 

3) dependency array with certain states in them 
	A) This also gets triggered on mounted
	B) This gets triggered on updated only if the states which are passed as a dependency array changes

Question -> 
	Make a heirarchy 
		Parent 
			Child1
			Child2

1) when child1 mounts child2 should unmount (Prove with valid console.log)
2) on each update on the parent -> log i am updated


TODO list -> 
Concepts ->
	1) State uplifting
	2) Props
	3) Hacky way of sending data upwards to your parent
	4) forms 
	5) react-icons
	6) conditional rendering of classes



App.js (parent)
	<h1> 
	<TodoForm /> 
			(Form Tag or you can direclty use a input and button)

	<TodoDisplay />
		<TodoItem /> 
			(todo content, tick icon, delete icon)

** special -> save and retrive todos -> on refresh -> the same items should appear
	Hint -> use local storage alogn with useEffect 