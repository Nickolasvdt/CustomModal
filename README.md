# Custom Modal Component README

## Overview

This README provides documentation on how to use the `CustomModal` component and how to open different types of modals based on the provided code.

## Installation

Ensure that you have React installed in your project. If not, you can install it using:

```bash
npm install react
```

## Usage

### Importing the Component

```javascript
import CustomModal from './path-to-custom-modal/CustomModal';
```

### Initializing Modal State

In your functional component, initialize the state for handling modal information:

```javascript
import React, { useState } from 'react';

const YourComponent = () => {
  const [modalInfos, setModalInfos] = useState({});
  // other component logic...
};
```

### Opening Modals

Create the state of modal and use the `handleModal` function to open different types of modals:
```javascript
const [modalInfos, setModalInfos] = useState({});

function handleModal(handle, type, text, description, confirmation) {
  if (handle) {
    setModalInfos({
      type: type,
      text: <p>{text}<span>{description}</span></p>,
      confirmation: confirmation,
    })
  } else {
    setModalInfos({})
  }
}
```


```javascript
const YourComponent = () => {
  // ... existing code

  // Example: Open a confirmation modal
  const openConfirmationModal = () => {
    handleModal(true, 'confirmation', 'Are you sure you want to proceed?', 'Additional information', yourConfirmationFunction);
  };

  // Example: Open a simple succes modal
  const openSuccessModal = () => {
    handleModal(true, 'success', 'Success!', 'Your request has been approved.');
  };

  // Example: Open a simple error modal
  const openErrorModal = () => {
    handleModal(true, 'error', 'Error!', 'Your request was denied.');
  };

  // ... existing code
};

```

### Rendering the Modal Component

Render the `CustomModal` component in your JSX, passing the `modalInfos` state and `handleModal` function as props:

```javascript
const YourComponent = () => {
  // ... existing code

  return (
    <div>
      {/* ... other JSX */}
      
      {
        modalInfos.type &&
        <CustomModal modalInfos={modalInfos} handleModal={handleModal} />
      }

      {/* ... other JSX */}
    </div>
  );
};
```
Obs: Customize your render condition in the same way as it was used in this way -> ```modalInfos.type &&```

Now, when you call `handleModal` with different parameters, the modal will dynamically change its content and behavior.

### Closing Modals

The modal can be closed by calling `handleModal` with `false` as the first argument:

```javascript
const YourComponent = () => {
  // ... existing code

  const closeModal = () => {
    handleModal(false);
  };

  // ... existing code
};
```

Now, when you call `handleModal` with different parameters, the modal will dynamically change its content and behavior.

## Modal Types

### Confirmation Modal

To open a confirmation modal, call `handleModal` with the following parameters:

```javascript
handleModal(true, 'confirmation', 'Confirmation Text', 'Additional Description', yourConfirmationFunction);
```
- `Confirmation Text:` The main text displayed in the modal.
- `Additional Description:` Additional information displayed in the modal (optional).
- `yourConfirmationFunction:` The function to be executed when the user confirms the action.

### Success Modal

To open a simple success modal, call `handleModal` with the following parameters:

```javascript
handleModal(true, 'success', 'Success Text', 'Description of modal');
```
- `Success Text:` The text to be displayed in the modal.
- `Description of modal:` Description text to be displayed in the modal.

### Error Modal

To open a simple error modal, call `handleModal` with the following parameters:

```javascript
handleModal(true, 'error', 'Error Text', 'Description of modal');
```
- `Error Text:` The text to be displayed in the modal.
- `Description of modal:` Description text to be displayed in the modal.

### Closing Modals

The modals can be closed by clicking the "Fechar" button or outside the modal.

# Closing

Feel free to adapt and modify it as needed to meet the specific requirements of your project.

If you encounter issues or have suggestions for improvements, please feel free to contribute or get in touch.

**Enjoy!**

## Author
Created by Nickolas Vidoto

