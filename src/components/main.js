import React, {useState} from 'react'
import { Icon } from '@iconify/react';

const Main = () => {

    const[listrep, setListRep] = useState("");
    const[listweights, setListWeights] = useState("");
    const[listrest, setListRest] = useState("");

    let initialArray= [];

    const [reps, setReps] = useState(initialArray);
    // const [weights, setWeights] = useState(initialArray);
    // const [rest, setRest] = useState(initialArray);


    const handleSubmit = (e, listrep, listweights, listrest)=> {
        e.preventDefault();
        setReps(reps => [...reps, listrep])
        console.log(reps);
    }

    return (
        <div>
            <div className="head">
                Add Exercises
            </div>
            <div className="card">
                <div className="hed">
               <div style={{width:'50%'}}>Reverse Lunges</div> <div style={{width:'50%', textAlign: 'right'}}><Icon width="30px" icon="ri:arrow-drop-down-line" /></div>
                </div>
            </div>
            <div className="card">
                <div className="hed">
                <div style={{width:'50%'}}>Reps/Weight/Sets/Rest </div> <div style={{width:'50%', textAlign: 'right'}}><Icon width="30px" icon="ri:arrow-drop-down-line" /></div></div>
            </div>
            <div className="">
            <div className=" row details">
                <div className="col-3">
                <img alt="jan" src="https://www.ironmanmagazine.com/wp-content/uploads/how_to_correctly_do_dumbell_lunges.png" />
                </div>
                <div className="col-7">
                Reverse Lunges
                <div style={{marginLeft: '0px'}} className="row">
                    reps 12-12 <br />
                    weights 0-12 <br />
                    rest 30-12
                </div>
                </div>
                <div className="col-2">
                    Edit <Icon width="30px" icon="ri:arrow-drop-down-line" />
                </div>
            </div>
            <div className="details">
                <table class="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col"><Icon icon="radix-icons:cross-2" /> Set 1</th> 
                        <th scope="col">reps</th> 
                        <th scope="col">weights</th> 
                        <th scope="col">rest</th> 
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>12</td>
                            <td>0</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
                <form onSubmit={handleSubmit}>
                    <input type="number" placeholder="reps" onChange={(e)=> {setListRep(e.target.value)}} value ={listrep} ></input>
                    <input type="number" placeholder="weights" onChange={(e)=> {setListWeights(e.target.value)}} value ={listweights} ></input>
                    <input type="number" placeholder="rest" onChange={(e)=> {setListRest(e.target.value)}} value ={listrest} ></input>
                    <button type="submit">Add New Set</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Main;