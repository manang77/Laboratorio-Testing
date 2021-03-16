import { renderHook, act } from '@testing-library/react-hooks';
import { createEmptyLookup, Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('./common/components/confirmation-dialog.hook', () => {
  it('should return an object with isOpen equals to false when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should return an object with itemToDelete equals to empty lookUp object when it calls it', () => {
    // Arrange
    const expectedResult = {
      id: '',
      name: ''
    }

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.itemToDelete).toEqual(expectedResult);
  });

  it('should return an object with an onAccept function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.onAccept).toEqual(expect.any(Function));
  });

  it('should return an object with an onClose function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.onClose).toEqual(expect.any(Function));
  });

  it('should return an object with an onOpenDialog function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen to true and itemToDelete to passed object when it calls onOpenDialog', () => {
    // Arrange
    const itemToDelete: Lookup = {id: '1', name: "Item to be deleted"};

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemToDelete);
    })

    // Assert
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(itemToDelete);
  });

  it('should update isOpen to false when it calls onClose', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    })

    // Assert
    expect(result.current.isOpen).toEqual(false);
  });

  it('should update itemToDelete to an empty lookup object when it calls onAccept', () => {
    // Arrange
    const itemToDelete: Lookup = { id: '1', name: "Item to be deleted" };
    const expectedResultItemToDelete = createEmptyLookup();
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(itemToDelete);
      result.current.onAccept();
    })

    // Assert
    expect(result.current.itemToDelete).toEqual(expectedResultItemToDelete);
  });
});
