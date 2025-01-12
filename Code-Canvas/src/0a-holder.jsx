import Circle1 from "./components/LandingPage/circle1/circle1"
import Circle2 from "./components/LandingPage/circle2/circle2"
import Circle3 from "./components/LandingPage/circle3/circle3"
import Circle4 from "./components/LandingPage/circle4/circle4"
import './App.css'

import Profile from './components/profile'


function App() {
  return (
    <>
      <Circle1 />
      <Circle2 />
      <Circle3 />
      <Circle4 />
      {/* <Profile /> */}
    </>
  );
}

// Signup.jsx
import React, { useState } from 'react';
import styles from './Signup.module.css'; // Import CSS module

const Signup = ({ onClose, onSwap }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call for signup
      const response = await fetch('signup-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      // Handle response
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div className={styles.signupContainer}> {/* Use CSS module class */}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Signup</button>
        <button type="button" onClick={onSwap}>Switch to Login</button>
        {error && <p>{error}</p>}
      </form>
      <button className={styles.close} onClick={onClose}>Close</button>
    </div>
  );
};

export default Signup;







// Login.jsx
import React, { useState } from 'react';
import styles from './login.module.css';

const Login = ({ onClose, onSwap, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call for login validation
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // If response status is not OK, throw an error
        throw new Error('Invalid email or password');
      }

      // Reset error state on successful login
      setError('');

      const data = await response.json();
      // Handle response (e.g., redirect to dashboard, store user data in state/context)
      setIsLoggedIn(true);
    } catch (error) {
      // Set error message for invalid credentials
      setError('Invalid email or password');
    }
  };

  const handleSwap = () => {
    onSwap(); // Call the onSwap function passed from the parent component
  };

  return (
    <div className={styles.logincontainer}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <button type="button" onClick={handleSwap}>Switch to Signup</button> {/* Button to swap to signup */}
        {error && <p>{error}</p>} {/* Display error message if error is set */}
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Login;


















// profile html

import React, { useState } from 'react';
import styles from './profile.module.css';
import DP from '../../assets/Profile/dp.jpeg';
import B1 from '../../../public/b-1.svg';
import B2 from '../../../public/b-2.svg';
import B3 from '../../../public/b-3.svg';
import B4 from '../../../public/b-4.svg';
import B5 from '../../../public/b-5.svg';
import B6 from '../../../public/b-6.svg';

const ProfilePage = () => {
  const [bio, setBio] = useState("This is a sample bio");
  const [about, setAbout] = useState("This is some information about me.");
  const [aboutImages, setAboutImages] = useState([]);
  const [components, setComponents] = useState([]);
  const [editingBio, setEditingBio] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const [newAbout, setNewAbout] = useState(about);
  const [newComponent, setNewComponent] = useState({ name: '', image: null, codes: [], activeCode: 0 });
  const [showComponent, setShowComponent] = useState(null);

  const handleBioChange = (e) => setNewBio(e.target.value);
  const handleAboutChange = (e) => setNewAbout(e.target.value);
  const handleAboutImageChange = (e) => setAboutImages([...aboutImages, ...Array.from(e.target.files).map(file => URL.createObjectURL(file))]);
  const handleComponentChange = (e) => setNewComponent({ ...newComponent, [e.target.name]: e.target.value });
  const handleComponentImageChange = (e) => setNewComponent({ ...newComponent, image: URL.createObjectURL(e.target.files[0]) });
  const handleAddCode = () => setNewComponent({ ...newComponent, codes: [...newComponent.codes, { language: '', code: '' }] });
  const handleCodeChange = (index, key, value) => {
    const updatedCodes = newComponent.codes.map((code, i) => i === index ? { ...code, [key]: value } : code);
    setNewComponent({ ...newComponent, codes: updatedCodes });
  };
  const saveBio = () => {
    setBio(newBio);
    setEditingBio(false);
  };

  const saveAbout = () => {
    setAbout(newAbout);
    setEditingAbout(false);
  };

  const saveComponent = () => {
    if (!newComponent.name || !newComponent.image || newComponent.codes.some(code => !code.language || !code.code)) {
      alert('All fields are required');
      return;
    }
    setComponents([...components, newComponent]);
    setNewComponent({ name: '', image: null, codes: [], activeCode: 0 });
  };

  const editBio = () => setEditingBio(true);
  const editAbout = () => setEditingAbout(true);

  const openComponent = (component) => setShowComponent({ ...component, activeCode: 0 });
  const closeComponent = () => setShowComponent(null);

  const setActiveCode = (index) => setShowComponent({ ...showComponent, activeCode: index });

  return (
    <div className={styles.profileContainer}>
      <div className={styles.sidebar}>
        <img src={DP} alt="Profile" className={styles.profilePicture} />
        <div className={styles.bio}>
          {editingBio ? (
            <div>
              <textarea value={newBio} onChange={handleBioChange} className={styles.bioInput} />
              <button onClick={saveBio} className={styles.saveButton}>Save</button>
            </div>
          ) : (
            <div>
              <p>{bio}</p>
              <button onClick={editBio} className={styles.editButton}>Edit Bio</button>
            </div>
          )}
        </div>
        <div className={styles.stats}>
          <p>Followers: 100</p>
          <p>Following: 50</p>
        </div>
        <div className={styles.badges}>
          <h3>Badges</h3>
          <img src={Badge} width="30px"></img>
          <img src={B1} width="30px"></img>
          <img src={B4} width="30px"></img>
          <img src={B3} width="30px"></img>
          <img src={B5} width="30px"></img>
          <img src={B6} width="30px"></img>
          <img src={B1} width="30px"></img>
          <img src={B4} width="30px"></img>
          <img src={B6} width="30px"></img>
          <img src={B1} width="30px"></img>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.section}>
          <h2>About</h2>
          {editingAbout ? (
            <div>
              <textarea value={newAbout} onChange={handleAboutChange} className={styles.bioInput} />
              <input type="file" multiple onChange={handleAboutImageChange} />
              <button onClick={saveAbout} className={styles.saveButton}>Save</button>
            </div>
          ) : (
            <div>
              <div className={styles.aboutContent}>
                {aboutImages.map((image, index) => (
                  <img src={image} alt={`About ${index}`} key={index} className={styles.aboutImage} />
                ))}
                <p>{about}</p>
              </div>
              <button onClick={editAbout} className={styles.editButton}>Edit About</button>
            </div>
          )}
        </div>
        <div className={styles.section}>
          <h2>Components</h2>
          <div className={styles.components}>
            {components.map((component, index) => (
              <div className={styles.componentCard} key={index} onClick={() => openComponent(component)}>
                <img src={component.image} alt={component.name} className={styles.componentImage} />
                <p>{component.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.newComponent}>
            <input type="text" name="name" placeholder="Component Name" value={newComponent.name} onChange={handleComponentChange} required />
            <input type="file" name="image" onChange={handleComponentImageChange} required />
            {newComponent.codes.map((code, index) => (
              <div key={index} className={styles.codeSnippet}>
                <select value={code.language} onChange={(e) => handleCodeChange(index, 'language', e.target.value)} required>
                  <option value="">Select Language</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  {/* Add more languages as needed */}
                </select>
                <textarea placeholder="Code" value={code.code} onChange={(e) => handleCodeChange(index, 'code', e.target.value)} required />
              </div>
            ))}
            <button onClick={handleAddCode} className={styles.addCodeButton}>Add Code</button>
            <button onClick={saveComponent} className={styles.saveButton}>Add Component</button>
          </div>
        </div>
      </div>
      {showComponent && (
        <div className={styles.fullScreenOverlay}>
          <div className={styles.fullScreenComponent}>
            <button onClick={closeComponent} className={styles.closeButton}>X</button>
            <img src={showComponent.image} alt={showComponent.name} className={styles.fullScreenImage} />
            <div className={styles.codeSwitcher}>
              {showComponent.codes.map((code, index) => (
                <button key={index} onClick={() => setActiveCode(index)}>
                  {code.language}
                </button>
              ))}
            </div>
            <pre className={styles.fullScreenCode}>{showComponent.codes[showComponent.activeCode]?.code}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
