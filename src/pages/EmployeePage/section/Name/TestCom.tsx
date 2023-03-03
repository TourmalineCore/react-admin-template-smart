import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

function Greeting() {
  const [greeting, setGreeting] = useState(null);
  console.log('render');

  const handleError = useErrorHandler();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/null')
      .then(
        (newGreeting) => setGreeting(newGreeting as any),
        handleError,
      );
  }, []);

  // function handleSubmit(event: any) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   fetch(name).then(
  //     (newGreeting) => setGreeting(newGreeting as any),
  //     handleError,
  //   );
  // }

  return greeting ? (
    <div>{greeting}</div>
  ) : (
    <form>
      <label>Name</label>
      <input id="name" />
      <button type="submit">get a greeting</button>
    </form>
  );
}

export default observer(Greeting);
