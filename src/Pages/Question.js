import React, {useEffect} from 'react'
import QuestionComponent from '../components/Question-page/QuestionComponent'
import './question.sass'
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link as RouterLink} from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function Question() {
    useEffect(()=>{
        const changePage = () => {
            window.scrollTo({top: 0});
          };
          changePage()
    },[])

    const breadcrumbs = [
        <RouterLink key="1" to="/">
          Ana Sehife
        </RouterLink>,
        <Typography key="2" color="text.primary">
          Tez-tez verilən suallar
        </Typography>,
      ];
  return (
    <div className="question-page">
        <div className="container">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
            <div className="question-container">
                <p className="question-title">Tez-tez verilən suallar</p>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? '}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
                <QuestionComponent title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?'}  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut.'}/>
            </div>
        </div>
    </div>
  )
}

export default Question