import React, {Component} from 'react';

class MKhome extends Component {
   state = {
       value: 0
   };

   setNewValue = () => {
       this.setState({value: 1});
   };

   render() {
       return (
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
                //<div> <button className="przyscisk btn-sm">Zmien</button> </div> -- po przeniesieniu linijke wyzej przysisk wyswietli sie w pasku progresu
              )
   }
}

export default MKhome;