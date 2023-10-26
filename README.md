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

Use the `handleModal` function to open different types of modals:

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
      
      <CustomModal modalInfos={modalInfos} handleModal={handleModal} />

      {/* ... other JSX */}
    </div>
  );
};
```

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
handleModal(true, 'success', 'Success Text');
```
- `Success Text:` The text to be displayed in the modal.

### Error Modal

To open a simple error modal, call `handleModal` with the following parameters:

```javascript
handleModal(true, 'error', 'Error Text');
```
- `Error Text:` The text to be displayed in the modal.

### Closing Modals

The modals can be closed by clicking the "Fechar" button or outside the modal.

## Closing

This modal component was created by Nickolas Vidoto. Feel free to adapt and modify it as needed to meet the specific requirements of your project.

If you encounter issues or have suggestions for improvements, please feel free to contribute or get in touch.

**Enjoy!**

