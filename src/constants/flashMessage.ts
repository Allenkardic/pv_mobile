import { showMessage } from 'react-native-flash-message';

export function showSuccessMessage(message: string, title?: string) {
  showMessage({
    message: title || 'Success',
    description: message,
    floating: true,
    icon: 'auto',
    type: 'success',
  });
}

export function showErrorMessage(message: string, title?: string) {
  showMessage({
    message: title || 'Error',
    description: message,
    floating: true,
    icon: 'auto',
    type: 'danger',
  });
}

export function showInfoMessage(message: string, title?: string) {
  showMessage({
    message: title || 'Info',
    description: message,
    floating: true,
    icon: 'auto',
    type: 'info',
  });
}
