/**
 * @ngdoc service
 * @name jtree.Api
 * @description
 * # Api
 * Factory in the jtree.
 */
angular.module('jtree')
    .factory('Api', function ($location, $anchorScroll, $rootScope)
    {
        'use strict';

        // INITIALIZATION


        // ACTUAL DEFINITION
        var service = {};
        service.methods = {
            scrollTo: function (id) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(id);
                    $anchorScroll();
            }
        };
        service.models = {
            capture:{},
            usage:{},
            offers:{}
        };

        service.style = {
            forward: function(){
                service.style.motion.slide='slide-right';
            },
            back: function(view){
                $rootScope.ui.show=view;
            },
            margin: {
                bottom: {
                    marginBottom:'1em'
                }
            },
            flex: {
                parent: {
                    width:'auto',
                    display:'flex',
                    flexWrap:'wrap'
                },
                child: {
                    flex: '1 1 auto'
                }
            },
            viewLeads: {
                background:'rgba(0,0,0, .2)',
                marginBottom:'.25em'},
            viewLeadsItem: {
                textDecoration:'underline',
                padding:'.1em'
            }


        };

        return service;
    });