import React from 'react';
import Card from './Card'

const Cardlist = ({data}) =>{
    
    return (
        <div>
        {
            data.map((robot) => {
                
                return(
                    
                    <Card 
                        key={robot.id} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email}
                    />
                );
            })
            
        }
        
           
        
        </div>
    )       
}

export default Cardlist;