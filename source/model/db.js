const dotenv = require('dotenv');
const mysql = require('mysql');
const server = require('http').createServer();
const io = require('socket.io')(server);

dotenv.config();

let config = {
	host: process.env.DBHOST,
	user: process.env.DBUSER,
	password: process.env.PASSWORD,
	database: process.env.DB,
}

let db = mysql.createPool(process.env.CLEARDB_DATABASE_URL)





// drop tables
// let dropFeedbackTable = `DROP TABLE feedback`;
// let dropResponse= `DROP TABLE response`;
// let dropsupportdesk = `DROP TABLE supportdesk`;
// let dropfeedbackcategory = `DROP TABLE feedbackcategory`;
// let dropcriticality = `DROP TABLE criticality`;

// db.query((dropFeedbackTable, dropResponse, dropsupportdesk, dropfeedbackcategory, dropcriticality), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Dropped Tables Successfully ----------------------------`)
// })


// // Feedback Table
// let feedbackTable = 
// 	`CREATE TABLE IF NOT EXISTS feedback(
// 		feedbackid varchar(255) NOT NULL PRIMARY KEY,
// 		streamlineUserId varchar(10) NOT NULL,
// 		dateTime DATETIME,
// 		subject varchar(50) NOT NULL,
// 		status varchar(5) NOT NULL,
// 		message varchar(255) NOT NULL
		
// 	)`;

// 	let responseTable = 
// 	`CREATE TABLE IF NOT EXISTS response(
// 		responseId int NOT NULL PRIMARY KEY auto_increment,
// 		feedbackid varchar(255) NOT NULL,
// 		streamlineuserid varchar(255) NOT NULL,
// 		responseMessage varchar(255) NOT NULL,
// 		dateTime TIMESTAMP NOT NULL, 
// 		foreign key (feedbackid) references feedback(feedbackid)
// 	)	
// 	`;

// 	let supportDeskUserTable = 
// 	`
// 	CREATE TABLE IF NOT EXISTS supportdesk(
// 		streamlineuserid varchar(255) NOT NULL PRIMARY KEY,
// 		username varchar(25),
// 		email varchar(255),
// 		name varchar (255),
// 		password varchar(255)
// 	)
// 	`

// 	let feedbackCategoryTable = 
// 	`
// 	CREATE TABLE IF NOT EXISTS feedbackcategory(
// 		feedbackcategoryid int auto_increment PRIMARY KEY,
// 		feedbackcategory varchar(255),
// 		criticalitylevel int,
// 		foreign key (criticalitylevel) references criticality(criticalityid)
// 	)
// 	`

// 	let criticality = 
// 	`
// 	CREATE TABLE IF NOT EXISTS criticality(
// 		criticalityid int auto_increment not null primary key,
// 		criticalitylevel varchar(25)
// 	)
// 	`

// // Query

// db.query((supportDeskUserTable), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Table support desk created`)
// })

// db.query((feedbackTable), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Tables created`)
// })


// db.query(( criticality), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Tables created`)
// })

// db.query(( responseTable), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Tables created`)
// })

// db.query((feedbackCategoryTable), (err, results, fields)=>{
// 	if(err){
// 		console.error(err.message);
// 	}
// 	console.log(`Tables created`)
// })

module.exports = db