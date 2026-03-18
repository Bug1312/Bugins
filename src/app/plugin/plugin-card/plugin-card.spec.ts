import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginCard } from './plugin-card';

describe('PluginCard', () => {
	let component: PluginCard;
	let fixture: ComponentFixture<PluginCard>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PluginCard],
		}).compileComponents();

		fixture = TestBed.createComponent(PluginCard);
		component = fixture.componentInstance;
		fixture.componentRef.setInput('plugin', {});
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
