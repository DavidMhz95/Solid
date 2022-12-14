(()=>{

    //No aplicando el principio de responsabilidad unica

    type Gender = 'M' | 'F'

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
            ){}
    }

    // const newPerson = new Person('David','M', new Date('1995-08-03'))
    // console.log(newPerson)

    class User extends Person{
        public lastAccess: Date
        constructor(
            public email: string,
            public role: string,
            name:string,
            gender: Gender,
            birthdate: Date
        ){
            super(name,gender,birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class userSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:string,
            role:string,
            name:string,
            gender: Gender,
            birthdate: Date
        ){
            super(email,role,name,gender,birthdate)
        }
    }

    const userSetting = new userSettings(
        '/usr/home',
        '/home',
        'david@gmail.com',
        'Admin',
        'David',
        'M',
        new Date('1995-08-03')
    )

    console.log({userSetting , areCredentialsValid: userSetting.checkCredentials()})


})()