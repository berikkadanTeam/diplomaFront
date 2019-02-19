import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	currentTabTitle: Subject<string> = new Subject<string>();
	constructor() {}

	getMonthName(index: number, isShortName?: boolean, isUpperCase?: boolean) {
		let months = [
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь'
		];
		let month: string = '';
		if (isShortName) {
			month = months[index - 1].substring(0, 3);
		} else {
			month = months[index - 1];
		}
		if (isUpperCase) {
			return month.toUpperCase();
		} else {
			return month;
		}
	}
}
