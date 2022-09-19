import Button from '../ui/button';
import classes from './events-search.module.css';

function EventsSearch(props) {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='year'>Year</label>
          <select id='year'>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor='month'>Month</label>
          <select id='month'>
            <option value='1'>Jan</option>
            <option value='2'>Feb</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>Aug</option>
            <option value='9'>Sept</option>
            <option value='10'>Oct</option>
            <option value='11'>Nov</option>
            <option value='12'>Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
