# chat-rooms

### CR-1 Create scheme for Users
	User containts fields:
		login
		password
		name
		dick's length
		roomIds
	
### CR-2 Create scheme for Rooms
	Room containts fileds:
		title
		userIds
		messageIds
		
### CR-3 Create scheme for Messages
	Message containts fields:
		text
		date
		authorId
		
### CR-4 Create queries for Users
	Queries:
		getAllUsers
		getUserById
		getUserByLogin
		login
		addUser
		
### CR-5 Create queries for Rooms
	Queries:
		getAllRooms
		getRoomsMessage
		joinRoom
		addRoom
		
### CR-6 Create queries for Messages
	Queries:
		addMessage