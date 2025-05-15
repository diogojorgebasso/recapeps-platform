This is the "database interface". Its only job is to talk to the database –
fetch data, save data, update data, delete data. It knows how to speak Firestore
(or SQL, or whatever database you use) but doesn't make decisions about why data
is being fetched or saved.
