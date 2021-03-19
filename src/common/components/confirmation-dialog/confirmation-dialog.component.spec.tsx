import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe('./common/components/confirmation-dialog/confirmation-dialog.component specs', () => {
  it('should display the title of the confirmation dialog when it feeds a title', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const titleElement = screen.getByRole('heading', { name: props.title });

    // Assert
    expect(titleElement).toBeInTheDocument();
  });

  it('should display the children content of the confirmation dialog when it feeds a children content', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const childrenElement = screen.getByText(props.children);

    // Assert
    expect(childrenElement).toBeInTheDocument();
  });

  it('should display a label in closeButton of the confirmation dialog when it feeds a label', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButtonElement = screen.getByRole('button', { name: 'Cancelar' });

    // Assert
    expect(closeButtonElement).toBeInTheDocument();
  });

  it('should display a label in acceptButton of the confirmation dialog when it feeds a label', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButtonElement = screen.getByRole('button', {
      name: 'Aceptar',
    });

    // Assert
    expect(acceptButtonElement).toBeInTheDocument();
  });

  it('should call onClose property when it clicks closeButton', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const closeButtonElement = screen.getByRole('button', {
      name: 'Cancelar',
    });
    userEvent.click(closeButtonElement);

    // Assert
    expect(props.onAccept).not.toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onAccept property when it clicks acceptButton', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title of Confirmation Dialog',
      labels: { closeButton: 'Cancelar', acceptButton: 'Aceptar' },
      children: 'Desea borrar el elemento Elemento1',
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const acceptButtonElement = screen.getByRole('button', {
      name: 'Aceptar',
    });
    userEvent.click(acceptButtonElement);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});

