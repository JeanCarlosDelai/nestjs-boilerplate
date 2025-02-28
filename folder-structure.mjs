// @ts-check

import { createFolderStructure } from 'eslint-plugin-project-structure';

/**
 * @typedef {Object} FolderChild
 * @property {string} name - The name of the folder or file.
 * @property {FolderChild[]} [children] - Optional array of child folders or files.
 */

/**
 * @typedef {Object} FolderStructure
 * @property {FolderChild[]} children - Array of children in the folder structure.
 */

/**
 * Builds a folder structure for unit tests.
 * @param {string} fileType - The type of file to create.
 * @returns {FolderStructure} The folder structure.
 */
const finalDirectoryWithUnitTestsBuilder = (fileType) => ({
  children: [
    {
      name: '__test__',
      children: [
        {
          name: 'unit',
          children: [{ name: `{kebab-case}.${fileType}.spec.ts` }]
        }
      ]
    },
    {
      name: `{kebab-case}.${fileType}.ts`
    }
  ]
});

export const folderStructureConfig = createFolderStructure({
  structure: [
    {
      name: 'src',
      children: [
        {
          name: 'module',
          // ruleId: 'moduleFolder',
          children: [
            {
              name: '{kebab-case}', // TODO make it genereic
              children: [
                {
                  name: '__test__',
                  children: [
                    {
                      name: 'e2e',
                      ruleId: 'defaultTestFolder'
                    },
                    {
                      name: 'integration',
                      ruleId: 'defaultTestFolder'
                    }
                  ]
                },
                { name: '{kebab-case}.module.ts' },
                {
                  name: 'core',
                  children: [
                    {
                      name: 'service',
                      ruleId: 'finalDirectoryWithUnitTests_service'
                    },
                    {
                      name: 'usecase',
                      ruleId: 'finalDirectoryWithUnitTests_usecase'
                    },
                    {
                      name: 'client',
                      children: [
                        {
                          name: '{kebab-case}.{kebab-case}.interface.ts'
                        }
                      ]
                    },
                    {
                      name: 'model',
                      ruleId: 'finalDirectoryWithUnitTests_model'
                    },
                    {
                      name: 'exception',
                      ruleId: 'finalDirectoryWithUnitTests_exception'
                    },
                    {
                      name: 'enum',
                      children: [{ name: '*.enum.ts' }]
                    }
                  ]
                },
                {
                  name: 'event',
                  children: [
                    {
                      name: 'handler',
                      ruleId: 'finalDirectoryWithUnitTests_eventHandler'
                    }
                  ]
                },
                {
                  name: 'integration',
                  children: [
                    {
                      name: 'provider',
                      ruleId: 'finalDirectoryWithUnitTests_integrationProvider'
                    }
                  ]
                },
                {
                  name: 'http',
                  children: [
                    {
                      name: 'client',
                      children: [
                        {
                          name: '{kebab-case}',
                          ruleId: 'finalDirectoryWithUnitTests_httpClient'
                        }
                      ]
                    },
                    {
                      name: 'resolver',
                      ruleId: 'finalDirectoryWithUnitTests_resolver'
                    },
                    {
                      name: 'controller',
                      ruleId: 'finalDirectoryWithUnitTests_controller'
                    },
                    {
                      name: 'swagger',
                      children: [
                        {
                          name: '{kebab-case}-swagger.decorator.ts'
                        }
                      ]
                    },
                    {
                      name: 'dto',
                      children: [
                        {
                          name: '{kebab-case}',
                          children: [
                            {
                              name: '*-input.dto.ts'
                            },
                            {
                              name: '*-output.dto.ts'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: 'guard',
                      children: [{ name: '*.guard.ts' }]
                    }
                  ]
                },
                {
                  name: 'persistence',
                  children: [
                    { name: 'entity', ruleId: 'finalDirectoryWithUnitTests_entity' },
                    {
                      name: 'repository',
                      ruleId: 'finalDirectoryWithUnitTests_repository'
                    },
                    {
                      name: 'external',
                      children: [
                        {
                          name: 'repository',
                          ruleId: 'finalDirectoryWithUnitTests_repository'
                        }
                      ]
                    },
                    {
                      name: '{kebab-case}.*.ts'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'shared',
          children: [
            {
              name: '{kebab-case}',
              children: [
                {
                  name: '{kebab-case}.*.ts'
                },
                {
                  name: '{kebab-case}',
                  children: [
                    {
                      name: '{kebab-case}.*.ts'
                    }
                  ]
                }
              ]
            },
            {
              name: 'module',
              children: [
                {
                  name: '{kebab-case}',
                  children: [
                    {
                      name: '{kebab-case}',
                      children: [
                        {
                          name: '{kebab-case}',
                          children: [
                            {
                              name: '{kebab-case}.*.ts'
                            },
                            {
                              name: '{kebab-case}',
                              children: [
                                {
                                  name: '{kebab-case}.*.ts'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          name: '{kebab-case}.*.ts'
                        }
                      ]
                    },
                    {
                      name: '{kebab-case}.*.ts'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'app.module.ts'
        },
        {
          name: 'main.ts'
        }
      ]
    },
    {
      name: 'test',
      children: [
        {
          name: '{kebab-case}.{kebab-case}.ts'
        },
        {
          name: '{kebab-case}',
          children: [
            {
              name: '{kebab-case}',
              children: [
                {
                  name: '{kebab-case}.{kebab-case}.ts'
                }
              ]
            },
            {
              name: '{kebab-case}.{kebab-case}.ts'
            }
          ]
        }
      ]
    }
  ],
  rules: {
    finalDirectoryWithUnitTests_service: finalDirectoryWithUnitTestsBuilder('service'),
    finalDirectoryWithUnitTests_usecase: finalDirectoryWithUnitTestsBuilder('usecase'),
    finalDirectoryWithUnitTests_model: finalDirectoryWithUnitTestsBuilder('model'),
    finalDirectoryWithUnitTests_resolver: finalDirectoryWithUnitTestsBuilder('resolver'),
    finalDirectoryWithUnitTests_controller:
      finalDirectoryWithUnitTestsBuilder('controller'),
    finalDirectoryWithUnitTests_repository:
      finalDirectoryWithUnitTestsBuilder('repository'),
    finalDirectoryWithUnitTests_entity: finalDirectoryWithUnitTestsBuilder('entity'),
    finalDirectoryWithUnitTests_exception:
      finalDirectoryWithUnitTestsBuilder('exception'),
    finalDirectoryWithUnitTests_eventHandler:
      finalDirectoryWithUnitTestsBuilder('event-handler'),
    finalDirectoryWithUnitTests_httpClient: finalDirectoryWithUnitTestsBuilder('client'),
    finalDirectoryWithUnitTests_integrationProvider:
      finalDirectoryWithUnitTestsBuilder('provider'),
    tsOnlyFiles: {
      children: [{ name: '*.ts' }]
    },
    defaultTestFolder: {
      children: [
        {
          name: '{kebab-case}',
          children: [{ ruleId: 'end2endTestFile' }]
        },
        {
          name: 'fixtures',
          children: [
            {
              name: '{kebab-case}.(jpg|mp3|mp4|json|ts  )'
            }
          ]
        },
        {
          name: '{kebab-case}.ts'
        },
        {
          name: '{kebab-case}.spec.ts'
        }
      ]
    },
    end2endTestFile: {
      name: '{kebab-case}.spec.ts'
    }
  }
});
