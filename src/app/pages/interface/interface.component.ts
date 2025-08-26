import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  activeTab = 'studies';
  activeState = 1;
  showSolutionDetails = true;
  currentSolution = 'Solution #7';
  coordinationModel = 'Coordination model v1';
  
  // Studies data
  currentProject = 'Electrical room west, Gen 2';
  validationStatus = {
    designInputs: { status: 'ready', label: 'Design Inputs', text: 'Ready to validate' },
    siteGeometry: { status: 'validated', label: 'Site Geometry', text: 'Validated' },
    designRules: { status: 'validated', label: 'Design Rules', text: 'Validated' },
    optionalSettings: { status: 'pending', label: 'Optional settings', text: 'Pending' },
    generation: { status: 'pending', label: 'Generation', text: 'Pending' }
  };
  
  selectedRule = 'P1 Clearance_Default';
  ruleDescription = 'Clearance sets the minimum mandatory clearance between raceway and elements in the model.';
  
  // Rule configuration
  ruleConfig = {
    scope: 'Entire Site',
    systems: 'Please select',
    clearances: {
      doors: {
        beside: { enabled: true, value: '8"' },
        inFront: { enabled: true, value: '6\'1"' }
      },
      roof: {
        below: { enabled: false, value: '0"' }
      }
    }
  };
  
  // Rule tree structure
  ruleTree: { [key: string]: any } = {
    parts: { expanded: false, rules: [] },
    supports: { expanded: true, rules: ['Supports_Default *'] },
    routing: { 
      expanded: true, 
      children: {
        clearance: { expanded: true, rules: ['P1 Clearance_Default'] },
        spacing: { expanded: true, rules: ['Spacing_Default *'] },
        racewayHeight: { expanded: true, rules: ['P1 Raceway Height'] },
        routingThroughWalls: { expanded: true, rules: ['P1 Routing Through Walls'] },
        routingThroughCeilings: { expanded: true, rules: ['P1 Routing Through Ceiling'] }
      }
    }
  };
  
  // Solution statistics data
  solutionStats = {
    conduit: {
      totalLength: '500\'',
      expanded: true
    },
    bends: {
      quantity: '200',
      degreesPerFoot: '50° / 100\'',
      totalAngle: '1,800°',
      expanded: true
    },
    junctions: {
      bodies: '200',
      boxes: '200',
      expanded: true
    },
    runId: {
      expanded: false
    },
    estimates: {
      constructionTime: '200hrs',
      cost: 'USD $50,000',
      expanded: true
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  setActiveState(state: number): void {
    this.activeState = state;
  }

  toggleSolutionDetails(): void {
    this.showSolutionDetails = !this.showSolutionDetails;
  }

  toggleSection(section: string): void {
    if (this.solutionStats[section]) {
      this.solutionStats[section].expanded = !this.solutionStats[section].expanded;
    }
  }

  exportSolution(): void {
    // Implementation for export functionality
    console.log('Exporting solution...');
  }

  giveFeedback(): void {
    // Implementation for feedback functionality
    console.log('Opening feedback form...');
  }

  // Studies methods
  toggleRuleTreeSection(section: string): void {
    if (this.ruleTree[section]) {
      this.ruleTree[section].expanded = !this.ruleTree[section].expanded;
    }
  }

  toggleRuleTreeChild(parent: string, child: any): void {
    if (this.ruleTree[parent]?.children?.[child]) {
      this.ruleTree[parent].children[child].expanded = !this.ruleTree[parent].children[child].expanded;
    }
  }

  getChildKeys(children: any): string[] {
    return Object.keys(children || {});
  }

  getSectionKeys(): string[] {
    return Object.keys(this.ruleTree);
  }

  selectRule(rule: string): void {
    this.selectedRule = rule;
  }

  updateRuleConfig(field: string, event: any): void {
    const value = (event.target as HTMLSelectElement).value;
    if (field === 'scope') {
      this.ruleConfig.scope = value;
    } else if (field === 'systems') {
      this.ruleConfig.systems = value;
    }
  }

  toggleClearance(type: string, subType: string): void {
    if (type === 'doors' && this.ruleConfig.clearances.doors[subType]) {
      this.ruleConfig.clearances.doors[subType].enabled = !this.ruleConfig.clearances.doors[subType].enabled;
    } else if (type === 'roof' && this.ruleConfig.clearances.roof[subType]) {
      this.ruleConfig.clearances.roof[subType].enabled = !this.ruleConfig.clearances.roof[subType].enabled;
    }
  }

  updateClearanceValue(type: string, subType: string, event: any): void {
    const value = (event.target as HTMLInputElement).value;
    if (type === 'doors' && this.ruleConfig.clearances.doors[subType]) {
      this.ruleConfig.clearances.doors[subType].value = value;
    } else if (type === 'roof' && this.ruleConfig.clearances.roof[subType]) {
      this.ruleConfig.clearances.roof[subType].value = value;
    }
  }

  validateProject(): void {
    console.log('Validating project...');
  }

  generateProject(): void {
    console.log('Generating project...');
  }
}
