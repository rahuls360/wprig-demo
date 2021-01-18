const { useState } = wp.element;

const SignupForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, email);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        value={name}
        placeholder='Enter Name'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={phone}
        placeholder='Enter Phone'
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='text'
        value={email}
        placeholder='Enter Email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='submit' />
    </form>
  );
};

export default SignupForm;
