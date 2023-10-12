import { Component } from '@angular/core';
import {ComponentProps} from "react";
import {ListOfWorkflows} from "@vanillabp/bc-ui";
import {OfficialWorkflowlistApi} from "@vanillabp/bc-official-gui-client";
import {Configuration as OfficialApiConfiguration} from "@vanillabp/bc-official-gui-client/dist/runtime";

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.scss']
})
export class WorkflowListComponent {
  ListOfWorkflows = ListOfWorkflows;
  listProps: ComponentProps<typeof ListOfWorkflows> = {
    showLoadingIndicator: (show) => {},
    useGuiSse: (onMessage, messageName) => undefined,
    useWorkflowlistApi: () => new OfficialWorkflowlistApi(new OfficialApiConfiguration({basePath: '/api/'})),
    openTask: (userTask) => {},
    navigateToWorkflow: () => {},
    currentLanguage: "de",
    t: (tKey) => tKey,
  }
}
