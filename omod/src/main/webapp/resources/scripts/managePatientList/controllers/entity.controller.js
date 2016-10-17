/*
 * The contents of this file are subject to the OpenMRS Public License
 * Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and
 * limitations under the License.
 *
 * Copyright (C) OpenHMIS.  All Rights Reserved.
 *
 */
(function () {
	'use strict';
	
	var base = angular.module('app.genericEntityController');
	base.controller("EntityController", EntityController);
	EntityController.$inject = ['$stateParams', '$injector', '$scope', '$filter',
		'EntityRestFactory', 'PatientListModel', 'PatientListRestfulService'];
	
	var ENTITY_NAME = "patientList";
	
	function EntityController($stateParams, $injector, $scope, $filter, EntityRestFactory,
	                          PatientListModel, PatientListRestfulService) {
		var self = this;
		
		var entity_name_message_key = "patientlist.title";
		
		// @Override
		self.setRequiredInitParameters = self.setRequiredInitParameters || function () {
				self.bindBaseParameters(PATIENT_LIST_MODULE_NAME, ENTITY_NAME, entity_name_message_key, RELATIVE_CANCEL_PAGE_URL);
			};
		
		/**
		 * Initializes and binds any required variable and/or function specific to entity.page
		 * @type {Function}
		 */
		// @Override
		self.bindExtraVariablesToScope = self.bindExtraVariablesToScope
			|| function (uuid) {
				/* bind variables.. */
				$scope.uuid = uuid;
			}
		
		/**
		 * All post-submit validations are done here.
		 * @return boolean
		 */
		// @Override
		self.validateBeforeSaveOrUpdate = self.validateBeforeSaveOrUpdate || function () {
				return true;
			}
			
		/* ENTRY POINT: Instantiate the base controller which loads the page */
		$injector.invoke(base.GenericEntityController, self, {
			$scope: $scope,
			$filter: $filter,
			$stateParams: $stateParams,
			EntityRestFactory: EntityRestFactory,
			GenericMetadataModel: PatientListModel
		});
	}
})();