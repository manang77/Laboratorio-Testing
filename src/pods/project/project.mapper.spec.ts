import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as collectionMapper from 'common/mappers/collection.mapper';


describe('./pods/project/project.mapper', () => {
  it('should return empty project when it feeds undefined', () => {

    // Arrange
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }
    const project: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return empty project when it feeds null', () => {

    // Arrange
    const expectedResult: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    }
    const project: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with empty employees array when it feeds a project with employees undefined', () => {

    // Arrange
    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: undefined
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: []
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with empty employees array when it feeds a project with employees empty array', () => {

    // Arrange
    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: []
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: []
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with 1 element employees array when it feeds a project with 1 element employees array', () => {

    // Arrange
    const employeesApi = [{
      id: 'emp1',
      isAssigned: false,
      employeeName: 'Employee1 Surname1',
    }];

    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: employeesApi
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: [{
        id: 'emp1',
        isAssigned: false,
        employeeName: 'Employee1 Surname1'
      }]
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with 2 elements employees array when it feeds a project with 2 element employees array', () => {

    // Arrange
    const employeesApi = [
      {
        id: 'emp1',
        isAssigned: false,
        employeeName: 'Employee1 Surname1'
      },
      {
        id: 'emp2',
        isAssigned: true,
        employeeName: 'Employee2 Surname2'
      }];

    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: employeesApi
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: [
        {
          id: 'emp1',
          isAssigned: false,
          employeeName: 'Employee1 Surname1'
        },
        {
          id: 'emp2',
          isAssigned: true,
          employeeName: 'Employee2 Surname2'
        }]
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should return a project without externalId when it feeds a project without externalId', () => {

    // Arrange
    const employeesApi = [
      {
        id: 'emp1',
        isAssigned: false,
        employeeName: 'Employee1 Surname1'
      },
      {
        id: 'emp2',
        isAssigned: true,
        employeeName: 'Employee2 Surname2'
      }];

    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      comments: 'Comment about project 1',
      isActive: false,
      employees: employeesApi
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      comments: 'Comment about project 1',
      isActive: false,
      employees: [
        {
          id: 'emp1',
          isAssigned: false,
          employeeName: 'Employee1 Surname1'
        },
        {
          id: 'emp2',
          isAssigned: true,
          employeeName: 'Employee2 Surname2'
        }]
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });


  it('should return a project without comments when it feeds a project without comments', () => {

    // Arrange
    const employeesApi = [
      {
        id: 'emp1',
        isAssigned: false,
        employeeName: 'Employee1 Surname1'
      },
      {
        id: 'emp2',
        isAssigned: true,
        employeeName: 'Employee2 Surname2'
      }];

    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      isActive: false,
      employees: employeesApi
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      isActive: false,
      employees: [
        {
          id: 'emp1',
          isAssigned: false,
          employeeName: 'Employee1 Surname1'
        },
        {
          id: 'emp2',
          isAssigned: true,
          employeeName: 'Employee2 Surname2'
        }]
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

  it('should return a project with one employee without isAssigned flag when it feeds a project with one employee without isActive flag', () => {

    // Arrange
    const employeesApi = [
      {
        id: 'emp1',
        employeeName: 'Employee1 Surname1'
      },
      {
        id: 'emp2',
        isAssigned: true,
        employeeName: 'Employee2 Surname2'
      }];

    const projectApi: apiModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: employeesApi
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Lemoncode',
      externalId: 'EXT1',
      comments: 'Comment about project 1',
      isActive: false,
      employees: [
        {
          id: 'emp1',
          employeeName: 'Employee1 Surname1'
        },
        {
          id: 'emp2',
          isAssigned: true,
          employeeName: 'Employee2 Surname2'
        }]
    };

    const mapToCollection = jest.spyOn(collectionMapper, 'mapToCollection');

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectApi);

    // Assert
    expect(mapToCollection).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });

});
