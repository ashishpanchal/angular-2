import { Component } from '@angular/core';

import { Pipe, PipeTransform } from '@angular/core';

import { Account } from './account';

import {AccountPipe} from './AccountPipe';


@Component({
	selector: 'app-root',
	templateUrl: 'account.html'
})

export class AppComponent {
	title = 'Client Account List';
	accounts : Account[] = [
							{
								"AccountId": 1255,
								"AccountName": "Little Test Account of Horrors",
								"Properties": [
									{ "Id": 1, "Name": "Property One" },
									{ "Id": 2, "Name": "portal.horrific.net" },
									{ "Id": 3, "Name": "Blistering Butterflies" },
									{ "Id": 5, "Name": "HamsterBBQ.net" },
									{ "Id": 8, "Name": "secretsquirrel.horrific.net" },
									{ "Id": 13, "Name": "fonedynamics.com.au" }
								]
							},
							{
								"AccountId": 1255,
								"AccountName": "Horrifically Awesome Enterprises",
								"Properties": [
									{ "Id": 21, "Name": "dna-test.horrified.net" },
									{ "Id": 34, "Name": "extra-secret-lab.com" },
									{ "Id": 55,"Name": "55 bottles on the wall" },
									{ "Id": 89, "Name": "Eighty Nine buckets of Brains" },
									{ "Id": 144, "Name": "Awesome Stuff" },
									{ "Id": 233, "Name": "portal.hae.global" }
								]
							},
							{
								"AccountId": 80085,
								"AccountName": "Beers International",
								"Properties": [
									{ "Id": 987, "Name": "Żywiec Brewery" },
									{ "Id": 1597, "Name": "Leżajsk Pełne" },
									{ "Id": 2584, "Name": "Karlovačka pivovara" },
									{ "Id": 4181, "Name": "Diageo Guiness" }
								]
							}
						];
	selectedAccount = this.accounts[0];
	
	/*
	* Set selected account
	*/
	showSelected(account){
		this.selectedAccount = account;
	}
}
