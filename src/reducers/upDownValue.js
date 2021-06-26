const initialize =10;

export const upDownValues = (state=initialize, action)=>{
 switch(action.type){
     case 'INCREMENT':
         return state+action.payload;
         break;
     case 'DECREMENT':
         return state -1;
         break;
     default:
         return state;
         break;

 }

}