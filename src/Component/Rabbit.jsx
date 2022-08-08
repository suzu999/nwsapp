import React from 'react';
import './Rabbit.css'

export const Rabbit = () => {
    return(
        <div className='Container'>
            <div className='Big_circle'>
                <div className='Rabbit'>
                    <div className='Ear'>
                        <div className='Ear_left'>
                            <div className='Ear_left_inner'></div>
                        </div>
                        <div className='Ear_right'>
                            <div className='Ear_right_inner'></div>
                        </div>
                    </div>
                    <div className='Face'>
                        <div className='Eye'>
                            <div className='Eye_left'></div>
                            <div className='Eye_right'></div>
                        </div>
                        <div className='Nose_align'>
                            <div className='Nose'></div>
                        </div>
                        <div className='Mouth_align'>
                            <div className='Mouth'></div>
                        </div>
                        <div className='Lip_align'>
                            <div className='Lip'></div>
                            <div className='Tongue'></div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div> 
    )

    

}
