import React from 'react';
import zxcvbn from 'zxcvbn';
import './style.css'

export const PasswordStrengthMeter : React.FC<{password:string}> = ({password}) => {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100/4;
  
    const createPassLabel = () => {
      switch(testResult.score) {
        case 0:
          return 'Faible';
        case 1:
          return 'Faible';
        case 2:
          return 'Moyan';
        case 3:
          return 'Fort';
        case 4:
          return 'Fort';
        default:
          return '';
      }
    }
  
    const funcProgressColor = () => {
      switch(testResult.score) {
        case 0:
          return '#828282';
        case 1:
          return '#EA1111';
        case 2:
          return '#FFAD00';
        case 3:
          return '#9bc158';
        case 4:
          return '#00b500';
        default:
          return 'none';
      }
    }
  
    const changePasswordColor = () => ({
      width: `${num}%`,
      background: funcProgressColor(),
      height: '7px'
    })
  
    return (
      <div className="progress-bar-container">
        <p className="progress-bar-label" >{createPassLabel()}</p>
        <div className="progress" style={{ height: '7px' }}>
          <div className="progress-bar" style={changePasswordColor()}></div>
        </div>
      </div>
    )
}



