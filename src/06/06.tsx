import React from 'react';

export const User = () => {
    function deleteUser () {
        alert('should be deleted')
    }
    function saveUser () {
        alert('should be saved')
    }


    return (
        <div>
            test
            <button onClick={deleteUser}>del</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}