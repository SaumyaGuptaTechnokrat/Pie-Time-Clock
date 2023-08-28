function AlarmClock(){
    document.addEventListener('DOMContentLoaded', function() {
        const setAlarmButton = document.getElementById('setAlarm');
        setAlarmButton.addEventListener('click', setAlarm);
      
        function setAlarm() {
          const alarmTimeInput = document.getElementById('alarmTime');
          const alarmTime = alarmTimeInput.value;
      
          if (!alarmTime) {
            alert('Please set a valid alarm time.');
            return;
          }
      
          const [hour, minute] = alarmTime.split(':');
          const now = new Date();
          const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
      
          const timeUntilAlarm = alarmDate - now;
      
          if (timeUntilAlarm <= 0) {
            alert('It\'s time for your alarm!');
            return;
          }
      
          setTimeout(() => {
            alert('It\'s time for your alarm!');
          }, timeUntilAlarm);
        }
      });
      
    return (
        <>
  <div class="alarm">
    <div>
      <label for="alarmTime">Set Time:</label>
      <input type="time" id="alarmTime"/>
    </div>
    <button id="setAlarm">Set Alarm</button>
  </div>
        </>
    );
}
export default AlarmClock;