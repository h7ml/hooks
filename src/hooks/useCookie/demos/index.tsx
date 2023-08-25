import { useCookie } from '@dext7r/hooks';
import { Button, Input, message } from 'antd';
import { useState } from 'react';

const AllCookies = () => {
  const [cookieName, setCookieName] = useState('');
  const [cookieValue, updateCookie, deleteCookie] = useCookie(cookieName);

  const handleUpdate = () => {
    if (cookieName && cookieValue !== undefined) {
      updateCookie(cookieValue, { maxAge: 3600 }); // Set cookie with maxAge of 1 hour
      message.success('Cookie updated successfully!');
    } else {
      message.error('Please enter a cookie name and value to update the cookie.');
    }
  };

  const handleDelete = () => {
    if (cookieName) {
      deleteCookie(); // Delete the cookie
      message.success('Cookie deleted successfully!');
    } else {
      message.error('Please enter a cookie name to delete the cookie.');
    }
  };

  return (
    <>
      <Input
        style={{ width: 240, marginRight: 8 }}
        value={cookieName}
        onChange={(e) => setCookieName(e.target.value)}
        placeholder="Enter Cookie Name"
      />
      <Input
        style={{ width: 240, marginRight: 8 }}
        value={cookieValue || ''}
        onChange={(e) => updateCookie(e.target.value, { maxAge: 3600 })}
        placeholder="Enter Cookie Value"
      />
      <Button type="primary" onClick={handleUpdate}>
        Update Cookie
      </Button>
      <Button onClick={handleDelete}>Delete Cookie</Button>
      <div>Current Cookie Value: {cookieValue ? cookieValue : 'N/A'}</div>
    </>
  );
};

export default AllCookies;
