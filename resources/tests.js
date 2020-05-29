var numberOfItemsToAdd = 1000;
var batchCount = 20;
var Suites = [];

async function spin() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            resolve();
        });
    });
}

Suites.push({
    name: 'Dodrio (js change-list)',
    url: 'todomvc/dodrio-js-cl/index.html',
    version: '1.0',
    before: function (contentWindow) {
        contentWindow.localStorage.removeItem('todomvc-dodrio')        
    },
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.store = function () {}
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = new InputEvent('input');
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = new KeyboardEvent('keydown', { 'keyCode': 13 });
                newTodo.dispatchEvent(keydownEvent);

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var checkbox = contentDocument.querySelector('.toggle:not(:checked)');
                checkbox.click();

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        // new BenchmarkTestStep('DeletingAllItems', async function (newTodo, contentWindow, contentDocument) {
        //     var deleteButtons = contentDocument.querySelectorAll('.destroy');
        //     var deleteButtonIndex = 0;
        //     for (var i = 0; i < numberOfItemsToAdd; i++) {
        //         deleteButtons[deleteButtonIndex++].click();

        //         if (i % batchCount == 0) {
        //             await spin();
        //             deleteButtons = contentDocument.querySelectorAll('.destroy');
        //             deleteButtonIndex = 0;
        //         }
        //     }
        // })
    ],
});

Suites.push({
    name: 'Dodrio (wasm-bindgen change-list)',
    url: 'todomvc/dodrio-wb-cl/index.html',
    version: '1.0',
    before: function (contentWindow) {
        contentWindow.localStorage.removeItem('todomvc-dodrio')        
    },
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.store = function () {}
        contentWindow.localStorage.removeItem('todomvc-dodrio')
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = new InputEvent('input');
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = new KeyboardEvent('keydown', { 'keyCode': 13 });
                newTodo.dispatchEvent(keydownEvent);

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var checkbox = contentDocument.querySelector('.toggle:not(:checked)');
                checkbox.click();

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        // new BenchmarkTestStep('DeletingAllItems', async function (newTodo, contentWindow, contentDocument) {
        //     var deleteButtons = contentDocument.querySelectorAll('.destroy');
        //     var deleteButtonIndex = 0;
        //     for (var i = 0; i < numberOfItemsToAdd; i++) {
        //         deleteButtons[deleteButtonIndex++].click();

        //         if (i % batchCount == 0) {
        //             await spin();
        //             deleteButtons = contentDocument.querySelectorAll('.destroy');
        //             deleteButtonIndex = 0;
        //         }
        //     }
        // })
    ],
});

Suites.push({
    name: 'Dodrio (interface-types change-list)',
    url: 'todomvc/dodrio-it-cl/index.html',
    version: '1.0',
    before: function (contentWindow) {
        contentWindow.localStorage.removeItem('todomvc-dodrio')        
    },
    prepare: function (runner, contentWindow, contentDocument) {
        contentWindow.store = function () {}
        contentWindow.localStorage.removeItem('todomvc-dodrio')
        return runner.waitForElement('.new-todo').then(function (element) {
            element.focus();
            return element;
        });
    },
    tests: [
        new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var inputEvent = new InputEvent('input');
                newTodo.value = 'Something to do ' + i;
                newTodo.dispatchEvent(inputEvent);

                var keydownEvent = new KeyboardEvent('keydown', { 'keyCode': 13 });
                newTodo.dispatchEvent(keydownEvent);

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        new BenchmarkTestStep('CompletingAllItems', async function (newTodo, contentWindow, contentDocument) {
            for (var i = 0; i < numberOfItemsToAdd; i++) {
                var checkbox = contentDocument.querySelector('.toggle:not(:checked)');
                checkbox.click();

                if (i % batchCount == 0) {
                    await spin();                    
                }
            }
        }),
        // new BenchmarkTestStep('DeletingAllItems', async function (newTodo, contentWindow, contentDocument) {
        //     var deleteButtons = contentDocument.querySelectorAll('.destroy');
        //     var deleteButtonIndex = 0;
        //     for (var i = 0; i < numberOfItemsToAdd; i++) {
        //         deleteButtons[deleteButtonIndex++].click();

        //         if (i % batchCount == 0) {
        //             await spin();
        //             deleteButtons = contentDocument.querySelectorAll('.destroy');
        //             deleteButtonIndex = 0;
        //         }
        //     }
        // })
    ],
});
// Suites.push({
//     name: 'Dodrio (interface-types change-list)',
//     url: 'todomvc/dodrio-it-cl/index.html',
//     version: '1.0',
//     prepare: function (runner, contentWindow, contentDocument) {
//         contentWindow.store = function () {}
//         return runner.waitForElement('.new-todo').then(function (element) {
//             element.focus();
//             return element;
//         });
//     },
//     tests: tests,
// });

// Suites.push({
//     name: 'React 15.0.2',
//     url: 'todomvc/react/index.html',
//     version: '15.0.2',
//     prepare: function (runner, contentWindow, contentDocument) {
//         contentWindow.Utils.store = function () {}
//         return runner.waitForElement('.new-todo').then(function (element) {
//             element.focus();
//             return element;
//         });
//     },
//     tests: [
//         new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
//             for (var i = 0; i < numberOfItemsToAdd; i++) {
//                 var inputEvent = document.createEvent('Event');
//                 inputEvent.initEvent('input', true, true);
//                 newTodo.value = 'Something to do ' + i;
//                 newTodo.dispatchEvent(inputEvent);

//                 var keydownEvent = document.createEvent('Event');
//                 keydownEvent.initEvent('keydown', true, true);
//                 keydownEvent.keyCode = 13; // VK_ENTER
//                 newTodo.dispatchEvent(keydownEvent);
//             }
//         }),
//         new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var checkboxes = contentDocument.querySelectorAll('.toggle');
//             for (var i = 0; i < checkboxes.length; i++)
//                 checkboxes[i].click();
//         }),
//         new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var deleteButtons = contentDocument.querySelectorAll('.destroy');
//             for (var i = 0; i < deleteButtons.length; i++)
//                 deleteButtons[i].click();
//         })
//     ]
// });

// Suites.push({
//     name: 'Mithril',
//     url: 'todomvc/mithril/index.html',
//     version: '0.1.0',
//     prepare: function (runner, contentWindow, contentDocument) {
//         return runner.waitForElement('#new-todo').then(function (element) {
//             element.focus();
//             return element;
//         });
//     },
//     tests: [
//         new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
//             for (var i = 0; i < numberOfItemsToAdd; i++) {
//                 var inputEvent = document.createEvent('Event');
//                 inputEvent.initEvent('input', true, true);
//                 newTodo.value = 'Something to do ' + i;
//                 newTodo.dispatchEvent(inputEvent);

//                 var keydownEvent = document.createEvent('Event');
//                 keydownEvent.initEvent('keypress', true, true);
//                 keydownEvent.keyCode = 13; // VK_ENTER
//                 newTodo.dispatchEvent(keydownEvent);
//             }
//         }),
//         new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var checkboxes = contentDocument.querySelectorAll('.toggle');
//             for (var i = 0; i < checkboxes.length; i++)
//                 checkboxes[i].click();
//         }),
//         new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var deleteButtons = contentDocument.querySelectorAll('.destroy');
//             for (var i = 0; i < deleteButtons.length; i++)
//                 deleteButtons[i].click();
//         })
//     ]
// });

// Suites.push({
//     name: 'Preact',
//     url: 'todomvc/preact/index.html',
//     version: '8.1.0',
//     prepare: function (runner, contentWindow, contentDocument) {
//         return runner.waitForElement('#new-todo').then(function (element) {
//             element.focus();
//             return element;
//         });
//     },
//     tests: [
//         new BenchmarkTestStep('Adding' + numberOfItemsToAdd + 'Items', function (newTodo, contentWindow, contentDocument) {
//             for (var i = 0; i < numberOfItemsToAdd; i++) {
//                 var inputEvent = document.createEvent('Event');
//                 inputEvent.initEvent('input', true, true);
//                 newTodo.value = 'Something to do ' + i;
//                 newTodo.dispatchEvent(inputEvent);

//                 var keydownEvent = document.createEvent('Event');
//                 keydownEvent.initEvent('keydown', true, true);
//                 keydownEvent.keyCode = keydownEvent.which = 13; // VK_ENTER
//                 newTodo.dispatchEvent(keydownEvent);
//             }
//         }),
//         new BenchmarkTestStep('CompletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var checkboxes = contentDocument.querySelectorAll('.toggle');
//             for (var i = 0; i < checkboxes.length; i++)
//                 checkboxes[i].click();
//         }),
//         new BenchmarkTestStep('DeletingAllItems', function (newTodo, contentWindow, contentDocument) {
//             var deleteButtons = contentDocument.querySelectorAll('.destroy');
//             for (var i = 0; i < deleteButtons.length; i++)
//                 deleteButtons[i].click();
//         })
//     ]
// });
