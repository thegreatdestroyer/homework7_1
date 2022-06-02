import React, {useState} from 'react';
import dayjs from "dayjs";


function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

const dateTransform = (date) => {
    const dateNow = dayjs('2018-03-03 12:11:00');
  if(dateNow.diff(date, 'minute') >= 1 && dateNow.diff(date, 'minute') <= 60) {
    return '12 минут назад';
  } else if (dateNow.diff(date, 'hour') >= 1 && dateNow.diff(date, 'hour') <= 24) {
    return '5 часов назад';
  } else if (dateNow.diff(date, 'day') >= 1) {
    return `${dateNow.diff(date, 'day')} дней назад`;
  }
  return 'Только что';
}

function withDateTimePretty(Component, getDate) {
  return class extends React.Component {
    render() {
      return <Component
          date={getDate(this.props.date)}/>
    }
  };
}

const DateTimePretty = withDateTimePretty(DateTime, dateTransform)


function Video(props) {
  return (
      <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <DateTimePretty date={props.date} />
      </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
      <VideoList list={list} />
  );
}