type GreetProps = {
    names: string;
    message:number,
    isLogged:boolean
  };
  
  const Greet = ({ names,message,isLogged }: GreetProps) => {
    return (
      <div>
        <h1>welcome folly {names} message {message} 
         {
            isLogged ? 'welcome to folyy with type':' go to your house'
         }
         </h1>
      </div>
    );
  };
  
  export default Greet;
  