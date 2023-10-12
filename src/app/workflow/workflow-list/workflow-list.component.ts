import {Component} from '@angular/core';
import {ComponentProps} from "react";
import {ListOfWorkflows} from "@vanillabp/bc-ui";
import {OfficialWorkflowlistApi, Workflow} from "@vanillabp/bc-official-gui-client";
import {Configuration as OfficialApiConfiguration} from "@vanillabp/bc-official-gui-client/dist/runtime";
import {Router} from "@angular/router";

const translations = {
  "title.long": 'Workflows',
  "title.short": 'Workflows',
  "total": "Total:",
  "no": "No.",
  "name": "Workflow",
  "module-unknown": "Unknown module",
  "retry-loading-module-hint": "Unfortunately, the workflow cannot be shown at the moment!",
  "retry-loading-module": "Retry loading...",
  "does-not-exist": "The requested workflow does not exist!"
}

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.scss']
})
export class WorkflowListComponent {

  ListOfWorkflows = ListOfWorkflows;
  listProps: ComponentProps<typeof ListOfWorkflows> = {
    showLoadingIndicator: (show) => {
    },
    useGuiSse: (onMessage, messageName) => undefined,
    useWorkflowlistApi: () => new OfficialWorkflowlistApi(new OfficialApiConfiguration({basePath: '/api/'})),
    openTask: (userTask) => {
    },
    navigateToWorkflow: (workflowDefinition) => {
      this.openWorkflow(workflowDefinition);
    },
    currentLanguage: "de",
    t: (tKey) => translations[tKey]
  }


  constructor(private router: Router) {
  }

  openWorkflow(workflowDef: Workflow) {
    this.router.navigate(['/workflow', workflowDef.id]).then(r => {
      console.log(r);
    })
  }

}
