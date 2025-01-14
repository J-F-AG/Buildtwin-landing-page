import { NgModule } from '@angular/core';
import { BrowserModule, Title, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtIconModule } from 'projects/bt-icon/bt-icon.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';


import { HdServicesComponent } from './pages/Home/hd-services/hd-services.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HdDiscoverProjectsComponent } from './pages/Home/hd-discover-projects/hd-discover-projects.component';
import { HdWhyBuildtwinComponent } from './pages/Home/hd-why-buildtwin/hd-why-buildtwin.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ServicesComponent } from './pages/Services/services/services.component';
import { MainBannerComponent } from './pages/Services/main-banner/main-banner.component';
import { DirectBookingComponent } from './pages/Services/direct-booking/direct-booking.component';
import { DrawingsComponent } from './pages/Services/drawings/drawings.component';
import { E2eEncryptedComponent } from './pages/Services/e2e-encrypted/e2e-encrypted.component';
import { HowItWorksComponent } from './pages/Services/how-it-works/how-it-works.component';
import { LiveTrackingComponent } from './pages/Services/live-tracking/live-tracking.component';
import { MeetingStandardsComponent } from './pages/Services/meeting-standards/meeting-standards.component';
import { RightTeamComponent } from './pages/Services/right-team/right-team.component';
import { ServTrustedByComponent } from './pages/Services/serv-trusted-by/serv-trusted-by.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SampleProjectsComponent } from './pages/Services/sample-projects/sample-projects.component';
import { SectorComponent } from './pages/sector/sector.component';
import { DataCenterSectionComponent } from './pages/sector/data-center-section/data-center-section.component';
import { AboutDataCenterSectionComponent } from './pages/sector/about-data-center-section/about-data-center-section.component';
import { DcEuropeComponent } from './pages/sector/dc-europe/dc-europe.component';
import { GetStartedComponent } from './pages/sector/get-started/get-started.component';




import { BtSelectGroupModule } from 'buildtwin-library-ux/bt-select-group';//buildtwin-library-ux
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { GlobalBannerModule } from './include-component/global-banner/global-banner.module';
import { BrowseServicesMainComponent } from './pages/browse-services/browse-services-main/browse-services-main.component';
import { BrowseServiceHeaderComponent } from './pages/browse-services/components/browse-service-header/browse-service-header.component';
import { SpecialProjectsComponent } from './pages/browse-services/components/special-projects/special-projects.component';
import { WhyBuildtwinComponent } from './include-component/why-buildtwin/why-buildtwin.component';
import { HubspotModule } from './include-component/hubspot/hubspot.module';
import { sectorSampleProjectsComponent } from './pages/sector/sample-projects/sample-projects.component';
import { sectorMeetingStandardsComponent } from './pages/sector/meeting-standards/meeting-standards.component';
import { sectorDirectBookingComponent } from './pages/sector/direct-booking/direct-booking.component';
import { sectorSolutionProviderComponent } from './pages/sector/hd-solution-provider/hd-solution-provider.component';
import { ServicesNewComponent } from './pages/services-new/services-new.component';
import { BannerComponent } from './pages/services-new/banner/banner.component';
import { DrawingFreelancersComponent } from './pages/services-new/drawing-freelancers/drawing-freelancers.component';
import { E2eEncryptionComponent } from './pages/services-new/e2e-encryption/e2e-encryption.component';
import { FaqBuildtwinComponent } from './pages/services-new/faq-buildtwin/faq-buildtwin.component';
import { FreeOfferFormComponent } from './pages/services-new/free-offer-form/free-offer-form.component';
import { HowItWorksNewComponent } from './pages/services-new/how-it-works/how-it-works.component';
import { LiveTrackingNewComponent } from './pages/services-new/live-tracking/live-tracking.component';
import { PlugPlayNewComponent } from './pages/services-new/plug-play/plug-play.component';
import { PrecastServiceComponent } from './pages/services-new/precast-service/precast-service.component';
import { SampleDrawingComponent } from './pages/services-new/sample-drawing/sample-drawing.component';
import { ServicesOfferedComponent } from './pages/services-new/services-offered/services-offered.component';
import { ThreeCardsComponent } from './pages/services-new/three-cards/three-cards.component';
import { TopVendorsComponent } from './pages/services-new/top-vendors/top-vendors.component';
import { TrustByNewComponent } from './pages/services-new/trust-by/trust-by.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FileUploadServiceComponent } from './pages/services-new/free-offer-form/file-upload-service/file-upload-service.component';
import { GetStartedModule } from './include-component/get-started/get-started.module';
import { RebarServicesNewComponent } from './pages/rebar/services-new.component';
import { RebarBannerComponent } from './pages/rebar/banner/banner.component';
import { RebarDrawingFreelancersComponent } from './pages/rebar/drawing-freelancers/drawing-freelancers.component';
import { RebarE2eEncryptionComponent } from './pages/rebar/e2e-encryption/e2e-encryption.component';
import { RebarFaqBuildtwinComponent } from './pages/rebar/faq-buildtwin/faq-buildtwin.component';
// import { RebarFreeOfferFormComponent } from './pages/rebar/free-offer-form/free-offer-form.component';
import { RebarHowItWorksNewComponent } from './pages/rebar/how-it-works/how-it-works.component';
import { RebarLiveTrackingNewComponent } from './pages/rebar/live-tracking/live-tracking.component';
import { RebarPlugPlayNewComponent } from './pages/rebar/plug-play/plug-play.component';
import { RebarPrecastServiceComponent } from './pages/rebar/precast-service/precast-service.component';
import { RebarSampleDrawingComponent } from './pages/rebar/sample-drawing/sample-drawing.component';
import { RebarServicesOfferedComponent } from './pages/rebar/services-offered/services-offered.component';
import { RebarThreeCardsComponent } from './pages/rebar/three-cards/three-cards.component';
import { RebarTopVendorsComponent } from './pages/rebar/top-vendors/top-vendors.component';
import { RebarTrustByNewComponent } from './pages/rebar/trust-by/trust-by.component';
import { BimServicesNewComponent } from './pages/bim/services-new.component';
import { BimBannerComponent } from './pages/bim/banner/banner.component';
import { BimDrawingFreelancersComponent } from './pages/bim/drawing-freelancers/drawing-freelancers.component';
import { BimE2eEncryptionComponent } from './pages/bim/e2e-encryption/e2e-encryption.component';
import { BimFaqBuildtwinComponent } from './pages/bim/faq-buildtwin/faq-buildtwin.component';
// import { BimFileUploadServiceComponent } from './pages/bim/free-offer-form/file-upload-service/file-upload-service.component';
import { BimHowItWorksNewComponent } from './pages/bim/how-it-works/how-it-works.component';
import { BimLiveTrackingNewComponent } from './pages/bim/live-tracking/live-tracking.component';
import { BimPlugPlayNewComponent } from './pages/bim/plug-play/plug-play.component';
import { BimPrecastServiceComponent } from './pages/bim/precast-service/precast-service.component';
import { BimSampleDrawingComponent } from './pages/bim/sample-drawing/sample-drawing.component';
import { BimServicesOfferedComponent } from './pages/bim/services-offered/services-offered.component';
import { BimThreeCardsComponent } from './pages/bim/three-cards/three-cards.component';
import { BimTopVendorsComponent } from './pages/bim/top-vendors/top-vendors.component';
import { BimTrustByNewComponent } from './pages/bim/trust-by/trust-by.component';
import { StructuralSteelServicesNewComponent } from './pages/structural-steel/services-new.component';
import { StructuralSteelBannerComponent } from './pages/structural-steel/banner/banner.component';
import { StructuralSteelDrawingFreelancersComponent } from './pages/structural-steel/drawing-freelancers/drawing-freelancers.component';
import { StructuralSteelE2eEncryptionComponent } from './pages/structural-steel/e2e-encryption/e2e-encryption.component';
import { StructuralSteelFaqBuildtwinComponent } from './pages/structural-steel/faq-buildtwin/faq-buildtwin.component';
// import { StructuralSteelFreeOfferFormComponent } from './pages/structural-steel/free-offer-form/free-offer-form.component';
import { StructuralSteelHowItWorksNewComponent } from './pages/structural-steel/how-it-works/how-it-works.component';
import { StructuralSteelLiveTrackingNewComponent } from './pages/structural-steel/live-tracking/live-tracking.component';
import { StructuralSteelPlugPlayNewComponent } from './pages/structural-steel/plug-play/plug-play.component';
// import { StructuralSteelFileUploadServiceComponent } from './pages/structural-steel/free-offer-form/file-upload-service/file-upload-service.component';
import { StructuralSteelPrecastServiceComponent } from './pages/structural-steel/precast-service/precast-service.component';
import { StructuralSteelSampleDrawingComponent } from './pages/structural-steel/sample-drawing/sample-drawing.component';
import { StructuralSteelServicesOfferedComponent } from './pages/structural-steel/services-offered/services-offered.component';
import { StructuralSteelThreeCardsComponent } from './pages/structural-steel/three-cards/three-cards.component';
import { StructuralSteelTopVendorsComponent } from './pages/structural-steel/top-vendors/top-vendors.component';
import { StructuralSteelTrustByNewComponent } from './pages/structural-steel/trust-by/trust-by.component';
// import { RebarFileUploadServiceComponent } from './pages/rebar/free-offer-form/file-upload-service/file-upload-service.component';
import { HdProvidersComponent } from './pages/Home/hd-providers/hd-providers.component';
import { HdGoodCompanyComponent } from './pages/Home/hd-good-company/hd-good-company.component';
import { BimUsaServicesNewComponent } from './pages/bim-usa/services-new.component';
import { BimUsaBannerComponent } from './pages/bim-usa/banner/banner.component';
import { BimUsaDrawingFreelancersComponent } from './pages/bim-usa/drawing-freelancers/drawing-freelancers.component';
import { BimUsaE2eEncryptionComponent } from './pages/bim-usa/e2e-encryption/e2e-encryption.component';
import { BimUsaFaqBuildtwinComponent } from './pages/bim-usa/faq-buildtwin/faq-buildtwin.component';
import { BimUsaHowItWorksNewComponent } from './pages/bim-usa/how-it-works/how-it-works.component';
import { BimUsaLiveTrackingNewComponent } from './pages/bim-usa/live-tracking/live-tracking.component';
import { BimUsaPlugPlayNewComponent } from './pages/bim-usa/plug-play/plug-play.component';
import { BimUsaPrecastServiceComponent } from './pages/bim-usa/precast-service/precast-service.component';
import { BimUsaSampleDrawingComponent } from './pages/bim-usa/sample-drawing/sample-drawing.component';
import { BimUsaServicesOfferedComponent } from './pages/bim-usa/services-offered/services-offered.component';
import { BimUsaThreeCardsComponent } from './pages/bim-usa/three-cards/three-cards.component';
import { BimUsaTopVendorsComponent } from './pages/bim-usa/top-vendors/top-vendors.component';
import { BimUsaTrustByNewComponent } from './pages/bim-usa/trust-by/trust-by.component';
import { LanguageChangeModule } from './include-component/language-change/language-change.module';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './services/lowercase-url-serializer';
import { SteelDetailingUsaBannerComponent } from './pages/steel-detailing-usa/banner/banner.component';
import { SteelDetailingUsaDrawingFreelancersComponent } from './pages/steel-detailing-usa/drawing-freelancers/drawing-freelancers.component';
import { SteelDetailingUsaE2eEncryptionComponent } from './pages/steel-detailing-usa/e2e-encryption/e2e-encryption.component';
import { SteelDetailingUsaFaqBuildtwinComponent } from './pages/steel-detailing-usa/faq-buildtwin/faq-buildtwin.component';
import { SteelDetailingUsaHowItWorksNewComponent } from './pages/steel-detailing-usa/how-it-works/how-it-works.component';
import { SteelDetailingUsaLiveTrackingNewComponent } from './pages/steel-detailing-usa/live-tracking/live-tracking.component';
import { SteelDetailingUsaPlugPlayNewComponent } from './pages/steel-detailing-usa/plug-play/plug-play.component';
import { SteelDetailingUsaPrecastServiceComponent } from './pages/steel-detailing-usa/precast-service/precast-service.component';
import { SteelDetailingUsaSampleDrawingComponent } from './pages/steel-detailing-usa/sample-drawing/sample-drawing.component';
import { SteelDetailingUsaServicesOfferedComponent } from './pages/steel-detailing-usa/services-offered/services-offered.component';
import { SteelDetailingUsaThreeCardsComponent } from './pages/steel-detailing-usa/three-cards/three-cards.component';
import { SteelDetailingUsaTopVendorsComponent } from './pages/steel-detailing-usa/top-vendors/top-vendors.component';
import { SteelDetailingUsaTrustByNewComponent } from './pages/steel-detailing-usa/trust-by/trust-by.component';
import { SteelDetailingUsaServicesNewComponent } from './pages/steel-detailing-usa/services-new.component';
import { SpecialProjectComponent } from './include-component/special-project/special-project.component';
import { ServiceCategoryComponent } from './include-component/service-category/service-category.component';
import { BuildingCodeComponent } from './pages/building-code/sector.component';
import { TtPartnersSectorComponent } from './pages/sector/tt-partners/tt-partners.component';
import { SpecialProjectSectorComponent } from './pages/sector/special-project/special-project.component';
import { HdDiscoverProjectsSectorComponent } from './pages/sector/hd-discover-projects/hd-discover-projects.component';
import { FaqBuildtwinSectorComponent } from './pages/sector/faq-buildtwin/faq-buildtwin.component';
import { SectorCategorySectorComponent } from './pages/sector/sector-category/service-category.component';
import { SectorCategoryComponent } from './include-component/sector-category/service-category.component';
import { FaqBuildtwinBuildingCodeComponent } from './pages/building-code/faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeComponent } from './pages/building-code/hd-discover-projects/hd-discover-projects.component';
import { SectorCategoryBuildingCodeComponent } from './pages/building-code/sector-category/service-category.component';
import { SpecialProjectBuildingCodeComponent } from './pages/building-code/special-project/special-project.component';
import { TtPartnersBuildingCodeComponent } from './pages/building-code/tt-partners/tt-partners.component';
import { HdServicesBuildingCodeComponent } from './pages/building-code/hd-services/hd-services.component';
import { DataCenterSectorComponent } from './pages/sector-data-center/sector.component';
import { DataCenterSpecialProjectComponent } from './pages/sector-data-center/special-project/special-project.component';
import { DataCenterTtPartnersComponent } from './pages/sector-data-center/tt-partners/tt-partners.component';
import { DataCenterHdDiscoverProjectsComponent } from './pages/sector-data-center/hd-discover-projects/hd-discover-projects.component';
import { DataCenterSectorCategoryComponent } from './pages/sector-data-center/sector-category/service-category.component';
// import { DataCenterHdGoodCompanyComponent } from './pages/sector-data-center/hd-good-company/hd-good-company.component';
import { DataCenterFaqBuildtwinComponent } from './pages/sector-data-center/faq-buildtwin/faq-buildtwin.component';
// import { ArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/sector.component';
// import { FaqBuildtwinArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/faq-buildtwin/faq-buildtwin.component';
// import { HdDiscoverProjectsArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/hd-discover-projects/hd-discover-projects.component';
// import { TtPartnersArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/tt-partners/tt-partners.component';
// import { SpecialProjectArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/special-project/special-project.component';
// import { SectorCategoryArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/sector-category/service-category.component';
// import { HdServicesArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/hd-services/hd-services.component';
import { FaqBuildtwinBuildingCodeAiscComponent } from './pages/building-code-aisc/faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeAiscComponent } from './pages/building-code-aisc/hd-discover-projects/hd-discover-projects.component';
import { HdServicesBuildingCodeAiscComponent } from './pages/building-code-aisc/hd-services/hd-services.component';
import { SectorCategoryBuildingCodeAiscComponent } from './pages/building-code-aisc/sector-category/service-category.component';
import { TtPartnersBuildingCodeAiscComponent } from './pages/building-code-aisc/tt-partners/tt-partners.component';
import { BuildingCodeAiscComponent } from './pages/building-code-aisc/sector.component';
import { SectorPowerPlantComponent } from './pages/sector-power-plant/sector.component';
import { PowerPlantFaqBuildtwinComponent } from './pages/sector-power-plant/faq-buildtwin/faq-buildtwin.component';
import { PowerPlantHdDiscoverProjectsComponent } from './pages/sector-power-plant/hd-discover-projects/hd-discover-projects.component';
import { PowerPlantSectorCategoryComponent } from './pages/sector-power-plant/sector-category/service-category.component';
import { PowerPlantSpecialProjectComponent } from './pages/sector-power-plant/special-project/special-project.component';
import { PowerPlantTtPartnersComponent } from './pages/sector-power-plant/tt-partners/tt-partners.component';
import { ArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/sector.component';
import { FaqBuildtwinArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/hd-discover-projects/hd-discover-projects.component';
import { TtPartnersArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/tt-partners/tt-partners.component';
import { SpecialProjectArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/special-project/special-project.component';
import { SectorCategoryArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/sector-category/service-category.component';
import { HdServicesArchitectureDesignServicesComponent } from './pages/software/architecture-design-services/hd-services/hd-services.component';
import { TtPartnersStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/tt-partners/tt-partners.component';
import { SpecialProjectStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/special-project/special-project.component';
import { SectorCategoryStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/sector-category/service-category.component';
import { HdServicesStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/hd-services/hd-services.component';
import { HdDiscoverProjectsStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/hd-discover-projects/hd-discover-projects.component';
import { FaqBuildtwinStructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/faq-buildtwin/faq-buildtwin.component';
import { StructuralSteelDetailingSoftwareComponent } from './pages/software/structural-steel-detailing/sector.component';
import { DraftingServicesNewComponent } from './pages/drafting-services/services-new.component';
import { DraftingBannerComponent } from './pages/drafting-services/banner/banner.component';
import { DraftingDrawingFreelancersComponent } from './pages/drafting-services/drawing-freelancers/drawing-freelancers.component';
import { DraftingE2eEncryptionComponent } from './pages/drafting-services/e2e-encryption/e2e-encryption.component';
import { DraftingFaqBuildtwinComponent } from './pages/drafting-services/faq-buildtwin/faq-buildtwin.component';
import { DraftingHowItWorksNewComponent } from './pages/drafting-services/how-it-works/how-it-works.component';
import { DraftingLiveTrackingNewComponent } from './pages/drafting-services/live-tracking/live-tracking.component';
import { DraftingPlugPlayNewComponent } from './pages/drafting-services/plug-play/plug-play.component';
import { DraftingSampleDrawingComponent } from './pages/drafting-services/sample-drawing/sample-drawing.component';
import { DraftingPrecastServiceComponent } from './pages/drafting-services/precast-service/precast-service.component';
import { DraftingServicesOfferedComponent } from './pages/drafting-services/services-offered/services-offered.component';
import { DraftingThreeCardsComponent } from './pages/drafting-services/three-cards/three-cards.component';
import { DraftingTopVendorsComponent } from './pages/drafting-services/top-vendors/top-vendors.component';
import { DraftingTrustByNewComponent } from './pages/drafting-services/trust-by/trust-by.component';
import { CadServicesNewComponent } from './pages/cad-services/services-new.component';
import { CadBannerComponent } from './pages/cad-services/banner/banner.component';
import { CadDrawingFreelancersComponent } from './pages/cad-services/drawing-freelancers/drawing-freelancers.component';
import { CadE2eEncryptionComponent } from './pages/cad-services/e2e-encryption/e2e-encryption.component';
import { CadFaqBuildtwinComponent } from './pages/cad-services/faq-buildtwin/faq-buildtwin.component';
import { CadHowItWorksNewComponent } from './pages/cad-services/how-it-works/how-it-works.component';
import { CadLiveTrackingNewComponent } from './pages/cad-services/live-tracking/live-tracking.component';
import { CadPlugPlayNewComponent } from './pages/cad-services/plug-play/plug-play.component';
import { CadServiceComponent } from './pages/cad-services/cad-service/cad-service.component';
import { CadSampleDrawingComponent } from './pages/cad-services/sample-drawing/sample-drawing.component';
import { CadServicesOfferedComponent } from './pages/cad-services/services-offered/services-offered.component';
import { CadThreeCardsComponent } from './pages/cad-services/three-cards/three-cards.component';
import { CadTopVendorsComponent } from './pages/cad-services/top-vendors/top-vendors.component';
import { CadTrustByNewComponent } from './pages/cad-services/trust-by/trust-by.component';
import { BuildingCodeEuroComponent } from './pages/building-code-euro/sector.component';
import { FaqBuildtwinBuildingCodeEuroComponent } from './pages/building-code-euro/faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeEuroComponent } from './pages/building-code-euro/hd-discover-projects/hd-discover-projects.component';
import { HdServicesBuildingCodeEuroComponent } from './pages/building-code-euro/hd-services/hd-services.component';
import { SectorCategoryBuildingCodeEuroComponent } from './pages/building-code-euro/sector-category/service-category.component';
import { TtPartnersBuildingCodeEuroComponent } from './pages/building-code-euro/tt-partners/tt-partners.component';
import { SoftwareListComponent } from './include-component/software-list/software-list.component';



@NgModule({
  declarations: [
    AppComponent,
   HdServicesComponent,
   HdDiscoverProjectsComponent,
   HdWhyBuildtwinComponent,
   ServicesComponent,
   MainBannerComponent,
   DirectBookingComponent,
   DrawingsComponent,
   E2eEncryptedComponent,
   HowItWorksComponent,
   LiveTrackingComponent,
   MeetingStandardsComponent,
   RightTeamComponent,
   ServTrustedByComponent,
   SampleProjectsComponent,
   SectorComponent,
   DataCenterSectionComponent,
   AboutDataCenterSectionComponent,
   DcEuropeComponent,
   GetStartedComponent,

   DataCenterSectorComponent,
   DataCenterSpecialProjectComponent,
   DataCenterTtPartnersComponent,
   DataCenterHdDiscoverProjectsComponent,
   DataCenterSectorCategoryComponent,
  //  DataCenterHdGoodCompanyComponent,
   DataCenterFaqBuildtwinComponent,

   BrowseServicesMainComponent,
   BrowseServiceHeaderComponent,
   SpecialProjectsComponent,
   WhyBuildtwinComponent,
   sectorSampleProjectsComponent,
   sectorMeetingStandardsComponent,
   sectorDirectBookingComponent,
   sectorSolutionProviderComponent,

   ServicesNewComponent,
   BannerComponent,
   DrawingFreelancersComponent,
   E2eEncryptionComponent,
   HowItWorksNewComponent,
   LiveTrackingNewComponent,
   PlugPlayNewComponent,
   PrecastServiceComponent,
   SampleDrawingComponent,
   ServicesOfferedComponent,
   ThreeCardsComponent,
   TopVendorsComponent,
   TrustByNewComponent,
   
   FreeOfferFormComponent,
   FaqBuildtwinComponent  ,
   FileUploadServiceComponent,
   RebarServicesNewComponent,
   RebarBannerComponent,
   RebarDrawingFreelancersComponent,
   RebarE2eEncryptionComponent,
   RebarFaqBuildtwinComponent,
  //  RebarFreeOfferFormComponent,
   RebarHowItWorksNewComponent,
   RebarLiveTrackingNewComponent,
   RebarPlugPlayNewComponent,
   RebarPrecastServiceComponent,
   RebarSampleDrawingComponent,
   RebarServicesOfferedComponent,
   RebarThreeCardsComponent,
   RebarTopVendorsComponent,
   RebarTrustByNewComponent,
   BimServicesNewComponent,
   BimBannerComponent,
   BimDrawingFreelancersComponent,
   BimE2eEncryptionComponent,
   BimFaqBuildtwinComponent,
  //  BimFileUploadServiceComponent,
   BimHowItWorksNewComponent,
   BimLiveTrackingNewComponent,
   BimPlugPlayNewComponent,
   BimPrecastServiceComponent,
   BimSampleDrawingComponent,
   BimServicesOfferedComponent,
   BimThreeCardsComponent,
   BimTopVendorsComponent,
   BimTrustByNewComponent,

   StructuralSteelServicesNewComponent,
   StructuralSteelBannerComponent,
   StructuralSteelDrawingFreelancersComponent,
   StructuralSteelE2eEncryptionComponent,
   StructuralSteelFaqBuildtwinComponent,
  //  StructuralSteelFileUploadServiceComponent,
   StructuralSteelHowItWorksNewComponent,
   StructuralSteelLiveTrackingNewComponent,
   StructuralSteelPlugPlayNewComponent,
   StructuralSteelPrecastServiceComponent,
   StructuralSteelSampleDrawingComponent,
   StructuralSteelServicesOfferedComponent,
   StructuralSteelThreeCardsComponent,
   StructuralSteelTopVendorsComponent,
   StructuralSteelTrustByNewComponent,

   BimUsaServicesNewComponent,
   BimUsaBannerComponent,
   BimUsaDrawingFreelancersComponent,
   BimUsaE2eEncryptionComponent,
   BimUsaFaqBuildtwinComponent,
   BimUsaHowItWorksNewComponent,
   BimUsaLiveTrackingNewComponent,
   BimUsaPlugPlayNewComponent,
   BimUsaPrecastServiceComponent,
   BimUsaSampleDrawingComponent,
   BimUsaServicesOfferedComponent,
   BimUsaThreeCardsComponent,
   BimUsaTopVendorsComponent,
   BimUsaTrustByNewComponent,
   
  //  RebarFileUploadServiceComponent,
   HdProvidersComponent,
   HdGoodCompanyComponent,

   SteelDetailingUsaBannerComponent,
   SteelDetailingUsaDrawingFreelancersComponent,
   SteelDetailingUsaE2eEncryptionComponent,
   SteelDetailingUsaFaqBuildtwinComponent,
   SteelDetailingUsaHowItWorksNewComponent,
   SteelDetailingUsaLiveTrackingNewComponent,
   SteelDetailingUsaPlugPlayNewComponent,
   SteelDetailingUsaPrecastServiceComponent,
   SteelDetailingUsaSampleDrawingComponent,
   SteelDetailingUsaServicesOfferedComponent,
   SteelDetailingUsaThreeCardsComponent,
   SteelDetailingUsaTopVendorsComponent,
   SteelDetailingUsaTrustByNewComponent,
   SteelDetailingUsaServicesNewComponent,

   DraftingServicesNewComponent,
   DraftingBannerComponent,
   DraftingDrawingFreelancersComponent,
   DraftingE2eEncryptionComponent,
   DraftingFaqBuildtwinComponent,
   DraftingHowItWorksNewComponent,
   DraftingLiveTrackingNewComponent,
   DraftingPlugPlayNewComponent,
   DraftingPrecastServiceComponent,
   DraftingSampleDrawingComponent,
   DraftingServicesOfferedComponent,
   DraftingThreeCardsComponent,
   DraftingTopVendorsComponent,
   DraftingTrustByNewComponent,

   CadServicesNewComponent,
   CadBannerComponent,
   CadDrawingFreelancersComponent,
   CadE2eEncryptionComponent,
   CadFaqBuildtwinComponent,
   CadHowItWorksNewComponent,
   CadLiveTrackingNewComponent,
   CadPlugPlayNewComponent,
   CadServiceComponent,
   CadSampleDrawingComponent,
   CadServicesOfferedComponent,
   CadThreeCardsComponent,
   CadTopVendorsComponent,
   CadTrustByNewComponent,

   SpecialProjectComponent,
   ServiceCategoryComponent,
   SectorCategoryComponent,
   TtPartnersSectorComponent,
   SpecialProjectSectorComponent,
   HdDiscoverProjectsSectorComponent,
   SectorCategorySectorComponent,
   FaqBuildtwinSectorComponent,
   BuildingCodeComponent,
   FaqBuildtwinBuildingCodeComponent,
   HdDiscoverProjectsBuildingCodeComponent,
   SectorCategoryBuildingCodeComponent,
   SpecialProjectBuildingCodeComponent,
   TtPartnersBuildingCodeComponent,
   HdServicesBuildingCodeComponent,
  //  ArchitectureDesignServicesComponent,
  //  FaqBuildtwinArchitectureDesignServicesComponent,
  //  HdDiscoverProjectsArchitectureDesignServicesComponent,
  //  HdServicesArchitectureDesignServicesComponent,
  //  SectorCategoryArchitectureDesignServicesComponent,
  //  SpecialProjectArchitectureDesignServicesComponent,
  //  TtPartnersArchitectureDesignServicesComponent,

   FaqBuildtwinBuildingCodeAiscComponent,
   HdDiscoverProjectsBuildingCodeAiscComponent,
   HdServicesBuildingCodeAiscComponent,
   SectorCategoryBuildingCodeAiscComponent,
   TtPartnersBuildingCodeAiscComponent,
   BuildingCodeAiscComponent,

   BuildingCodeEuroComponent,
   FaqBuildtwinBuildingCodeEuroComponent,
   HdDiscoverProjectsBuildingCodeEuroComponent,
   HdServicesBuildingCodeEuroComponent,
   SectorCategoryBuildingCodeEuroComponent,
   TtPartnersBuildingCodeEuroComponent,

   SectorPowerPlantComponent,
   PowerPlantFaqBuildtwinComponent,
   PowerPlantHdDiscoverProjectsComponent,
   PowerPlantSectorCategoryComponent,
   PowerPlantSpecialProjectComponent,
   PowerPlantTtPartnersComponent,
   ArchitectureDesignServicesComponent,
   FaqBuildtwinArchitectureDesignServicesComponent,
   HdDiscoverProjectsArchitectureDesignServicesComponent,
   HdServicesArchitectureDesignServicesComponent,
   SectorCategoryArchitectureDesignServicesComponent,
   SpecialProjectArchitectureDesignServicesComponent,
   TtPartnersArchitectureDesignServicesComponent,
   StructuralSteelDetailingSoftwareComponent,
   FaqBuildtwinStructuralSteelDetailingSoftwareComponent,
   HdDiscoverProjectsStructuralSteelDetailingSoftwareComponent,
   HdServicesStructuralSteelDetailingSoftwareComponent,
   SectorCategoryStructuralSteelDetailingSoftwareComponent,
   SpecialProjectStructuralSteelDetailingSoftwareComponent,
   TtPartnersStructuralSteelDetailingSoftwareComponent,
   SoftwareListComponent
  ],
  imports: [    
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    BtIconModule,
    NgxScrollTopModule,
    HttpClientModule
  ],
  providers: [
    Title,
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideClientHydration(),
    // { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }