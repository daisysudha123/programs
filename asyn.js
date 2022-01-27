function createData(){
        return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('data created');
        },5000);
    })
    }
    
    async function showData(){
        console.log('process started');
        await createData().then((res) => {
              console.log(res);
        })
       setTimeout(() => {
        console.log('show data');
       },2000 );
    }
    showData();
    
    
    function createData(){
        return new Promise((resolve,reject) => {
            let x = 20;
            if(x == 10){
            setTimeout(() => {
            resolve('data created');
            },5000);
            }
        else{
            setTimeout(() => {
            reject('data not created');
            },5000);
        }
    })
    };
    
    async function showData(){
        console.log('process started');
        try{
        let res = await createData(); 
        }
        catch (err) {
            console.log(err);
        }  
       setTimeout(() => {
        console.log('show data');
       },2000 );   
    };
    showData()