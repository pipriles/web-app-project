import { Component, OnInit } from '@angular/core';
import { PropertyService, Property } from '../property.service';


@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.scss']
})
export class PropertyAddComponent implements OnInit {

	public model: Property;
  constructor(private propService: PropertyService) {}

  ngOnInit() {
		this.model = this.propService.defaultProperty();
	}

	addProperty() {
		console.log('Property added!', this.model);
		this.propService.addProperty(this.model)
	}
}
